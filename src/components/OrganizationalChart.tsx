import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

type OrgNode = {
    id: number;
    title: string;
    names: string[];
    type: string;
    order: number;
    is_active: boolean;
    children: OrgNode[];
};

type ApiResponse = {
    success: boolean;
    data: OrgNode[];
    cached_at: string;
};

const NodeCard = ({ title, names, size = "md", accent = false }: { title: string; names: string[]; size?: "sm" | "md" | "lg"; accent?: boolean }) => {
    const padding = size === "lg" ? "p-4 md:p-5 lg:p-6" : size === "sm" ? "p-3 md:p-3.5" : "p-3.5 md:p-4";
    const textSize = size === "lg" ? "text-sm md:text-base" : "text-sm md:text-sm";
    const titleSize = size === "lg" ? "text-sm md:text-base font-bold" : "text-xs md:text-sm font-semibold";

    return (
        <Card
            className={`
                ${accent ? "bg-primary/5 border-primary/20" : "bg-card border-border"}
                shadow-md hover:shadow-lg rounded-lg transition-all duration-300
                hover:-translate-y-1 hover:border-primary/40 w-full
            `}
            role="group"
        >
            <CardContent className={`${padding} text-center space-y-2`}>
                <div
                    className={`
                        ${accent ? "bg-primary text-primary-foreground" : "bg-neutral-800 text-white"}
                        px-2.5 py-1.5 md:px-3 md:py-2 rounded-md ${titleSize} shadow-sm leading-tight
                    `}
                    aria-label={title}
                >
                    {title}
                </div>
                <div className="space-y-0.5 md:space-y-1">
                    {names.map((name, idx) => (
                        <p
                            key={`${name}-${idx}`}
                            className={`font-medium leading-snug text-card-foreground ${textSize}`}
                        >
                            {name}
                        </p>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

const VLine = ({ h = 24, className = "" }: { h?: number; className?: string }) => (
    <div
        className={`w-1 bg-primary/60 mx-auto rounded-full ${className}`}
        style={{ height: `${h}px` }}
        aria-hidden="true"
    />
);

const HLine = ({ className = "" }: { className?: string }) => (
    <div className={`h-1 w-full bg-primary/60 rounded-full ${className}`} aria-hidden="true" />
);

// Recursive component to render the tree
const TreeNode = ({ node, level = 0 }: { node: OrgNode; level: number }) => {
    const isTopLevel = level === 0;
    const isLeadership = level <= 1;
    const hasChildren = node.children && node.children.length > 0;

    return (
        <div className="flex flex-col items-center gap-3 md:gap-4">
            <div className={`w-full ${isTopLevel ? 'max-w-xs' : 'max-w-[280px] md:max-w-sm'}`}>
                <NodeCard
                    title={node.title}
                    names={node.names}
                    size={isLeadership ? "lg" : "md"}
                    accent={isLeadership}
                />
            </div>
            {hasChildren && (
                <>
                    <VLine h={level === 0 ? 32 : 24} className="md:h-7" />
                    <div className="relative w-full">
                        {node.children.length > 1 && (
                            <div className="absolute left-4 right-4 sm:left-8 sm:right-8 md:left-12 md:right-12 top-0">
                                <HLine />
                            </div>
                        )}
                        <div className={`grid gap-3 md:gap-4 pt-6 md:pt-8 ${
                            level === 0 ? 'grid-cols-2 sm:grid-cols-2 lg:grid-cols-4' :
                            level === 1 ? 'grid-cols-1 lg:grid-cols-2' :
                            'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'
                        }`}>
                            {node.children
                                .filter(child => child.is_active)
                                .sort((a, b) => a.order - b.order)
                                .map((child) => (
                                    <div key={child.id} className="flex flex-col items-center gap-2 md:gap-3">
                                        {node.children.length > 1 && <VLine h={20} className="md:h-6" />}
                                        <TreeNode node={child} level={level + 1} />
                                    </div>
                                ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

const OrganizationalChart = () => {
    const [data, setData] = useState<OrgNode[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/organization');
                if (!response.ok) {
                    throw new Error('Failed to fetch organizational data');
                }
                const result: ApiResponse = await response.json();
                if (result.success) {
                    setData(result.data.filter(node => node.is_active));
                } else {
                    throw new Error('API returned unsuccessful response');
                }
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <section className="w-full py-20">
                <div className="container mx-auto px-4 text-center">
                    <div className="text-lg">Loading organizational structure...</div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="w-full py-20">
                <div className="container mx-auto px-4 text-center">
                    <div className="text-red-500">Error loading organizational structure: {error}</div>
                </div>
            </section>
        );
    }

    return (
        <section className="w-full overflow-x-auto pb-4" aria-label="Organizational chart">
            <div className="min-w-[320px] mx-auto px-3 md:px-6 lg:px-8 space-y-6 md:space-y-10 lg:space-y-12 max-w-7xl">
                {data.length === 0 ? (
                    <div className="text-center py-10">
                        <div className="text-muted-foreground">No organizational data available.</div>
                    </div>
                ) : (
                    data
                        .filter(node => node.is_active)
                        .sort((a, b) => a.order - b.order)
                        .map((rootNode) => (
                            <TreeNode key={rootNode.id} node={rootNode} level={0} />
                        ))
                )}
            </div>
        </section>
    );
};

export default OrganizationalChart;
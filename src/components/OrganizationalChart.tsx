import { Card, CardContent } from "@/components/ui/card";

type OrgNode = {
    title: string;
    names: string | string[];
    size?: "sm" | "md" | "lg";
};

const NodeCard = ({ title, names, size = "md" }: OrgNode) => {
    const list = Array.isArray(names) ? names : [names];
    const padding = size === "lg" ? "p-6" : size === "sm" ? "p-3" : "p-4";
    const textSize = size === "lg" ? "text-base" : size === "sm" ? "text-sm" : "text-base";

    return (
        <Card
            className="bg-card border border-border shadow-sm rounded-xl transition-transform duration-200 hover:-translate-y-1 focus-within:-translate-y-1"
            role="group"
        >
            <CardContent className={`${padding} text-center space-y-2`}>
                <div className="bg-neutral-900 text-white px-3 py-2 rounded-md font-semibold text-sm" aria-label={title}>
                    {title}
                </div>
                {list.map((name) => (
                    <p key={name} className={`font-medium leading-snug text-card-foreground ${textSize}`}>
                        {name}
                    </p>
                ))}
            </CardContent>
        </Card>
    );
};

const VLine = ({ h = 24 }: { h?: number }) => (
    <div className="w-px bg-border mx-auto" style={{ height: `${h}px` }} aria-hidden="true" />
);

const HLine = () => <div className="h-px w-full bg-border" aria-hidden="true" />;

// Modern, clean organizational chart with single connectors per tier
const OrganizationalChart = () => {
    return (
        <section className="w-full overflow-x-auto pb-12" aria-label="Organizational chart">
            <div className="min-w-[960px] mx-auto px-4 md:px-8 space-y-12">
                {/* Top leadership */}
                <div className="flex flex-col items-center gap-4">
                    <NodeCard title="Chairman" names="Eng. Zakariya Al-Araibi" size="lg" />
                    <VLine h={32} />
                    <NodeCard title="Project Manager" names="Eng. Mohammed Eljhane" size="lg" />
                </div>

                {/* Direct reports to PM */}
                <div className="flex flex-col items-center gap-6">
                    <VLine h={28} />
                    <div className="relative w-full max-w-5xl pt-8">
                        {/* single horizontal connector for this tier */}
                        <div className="absolute left-6 right-6 top-0">
                            <HLine />
                        </div>
                        <div className="flex flex-wrap justify-between gap-6 px-4 md:px-6">
                            {[
                                { title: "Media Office", names: "Mrs. Bushra Yousef" },
                                { title: "Planning & Quality Assurance", names: ["Eng. Hadeel Samir", "Eng. Alaa Al-Araibi"] },
                                { title: "Legal Affairs", names: "Mrs. Khawla Bouzandis" },
                                { title: "Secretary", names: "Mrs. Bushra Yousef" },
                            ].map((item) => (
                                <div key={item.title} className="w-full sm:w-[48%] md:w-[22%] flex flex-col items-center gap-3">
                                    <VLine h={24} />
                                    <NodeCard title={item.title} names={item.names} size="sm" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Two main branches */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                    {/* Technical Administration */}
                    <div className="flex flex-col items-center gap-6">
                        <NodeCard title="Technical Administration" names="Eng. Zakariya Al-Araibi" />
                        <VLine h={24} />
                        <div className="w-full">
                            <HLine />
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                                {[{ title: "Projects Implementation", names: "Eng. Mohammed El-Jehane" }, { title: "Procurement", names: "Eng. Mohammed Ziou" }, { title: "Design Department", names: "Eng. Alaa Al-Araibi" }].map((item) => (
                                    <div key={item.title} className="flex flex-col items-center gap-3">
                                        <VLine h={20} />
                                        <NodeCard title={item.title} names={item.names} size="sm" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Design sub-departments */}
                        <div className="w-full mt-6">
                            <HLine />
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                                {[
                                    { title: "Infrastructure", names: "Eng. Marwa Al-Hewari" },
                                    { title: "Fire Safety", names: "Eng. Iklas Al-Abbur" },
                                    { title: "Electrical", names: "Eng. Hadeel Samir" },
                                    { title: "Plumbing", names: "Eng. Haneen Addi" },
                                    { title: "Air Conditioning", names: "Eng. Alaa Al-Araibi" },
                                    { title: "IT", names: "Eng. Sohaib Kamash" },
                                ].map((item) => (
                                    <div key={item.title} className="flex flex-col items-center gap-3">
                                        <VLine h={18} />
                                        <NodeCard title={item.title} names={item.names} size="sm" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Administrative & Financial Affairs */}
                    <div className="flex flex-col items-center gap-6">
                        <NodeCard title="Administrative & Financial Affairs" names="Mrs. Bushra Yousef" />
                        <VLine h={24} />
                        <div className="w-full">
                            <HLine />
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                                {[{ title: "Finance", names: "Mr. Mouad Al-Gumati" }, { title: "Human Resources", names: "Mrs. Bushra Yousef" }].map((item) => (
                                    <div key={item.title} className="flex flex-col items-center gap-3">
                                        <VLine h={20} />
                                        <NodeCard title={item.title} names={item.names} size="sm" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Finance sub-sections */}
                        <div className="w-full sm:w-2/3 mt-6 mx-auto">
                            <HLine />
                            <div className="grid grid-cols-1 gap-3 mt-4">
                                {[{ title: "Accounts", names: "Mr. Mouad Al-Gumati" }, { title: "Purchasing", names: "Eng. Abd-Elfattah Al-Nahhoum" }].map((item) => (
                                    <div key={item.title} className="flex flex-col items-center gap-3">
                                        <VLine h={18} />
                                        <NodeCard title={item.title} names={item.names} size="sm" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrganizationalChart;

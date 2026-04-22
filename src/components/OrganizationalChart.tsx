import { useEffect, useState } from "react";

type ApiResponse = {
    success: boolean;
    data: {
        chart_url: string;
        updated_at: string;
    };
};

const OrganizationalChart = () => {
    const [chartUrl, setChartUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dashboard.etgroup.ly/api/organization');
                if (!response.ok) {
                    throw new Error('Failed to fetch organizational chart');
                }
                const result: ApiResponse = await response.json();
                if (result.success && result.data.chart_url) {
                    // Construct full URL if the chart_url is a relative path
                    const fullUrl = result.data.chart_url.startsWith('http') 
                        ? result.data.chart_url 
                        : `https://dashboard.etgroup.ly${result.data.chart_url}`;
                    setChartUrl(fullUrl);
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
                    <div className="text-lg">Loading organizational chart...</div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="w-full py-20">
                <div className="container mx-auto px-4 text-center">
                    <div className="text-red-500">Error loading organizational chart: {error}</div>
                </div>
            </section>
        );
    }

    if (!chartUrl) {
        return (
            <section className="w-full py-20">
                <div className="container mx-auto px-4 text-center">
                    <div className="text-muted-foreground">No organizational chart available.</div>
                </div>
            </section>
        );
    }

    return (
        <section className="w-full py-12 md:py-20" aria-label="Organizational chart">
            <div className="container mx-auto px-4">
                <div className="flex justify-center">
                    <img 
                        src={chartUrl} 
                        alt="Organizational Chart" 
                        className="max-w-full h-auto rounded-lg shadow-lg"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
};

export default OrganizationalChart;


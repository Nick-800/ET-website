import { Card, CardContent } from "@/components/ui/card";

// Organizational Chart Component with animations
const OrganizationalChart = () => {
    return (
        <div className="w-full overflow-x-auto pb-8">
            <div className="min-w-[1200px] mx-auto p-8">
                {/* Chairman - Top Level */}
                <div className="flex justify-center mb-16 animate-fade-in">
                    <Card className="w-80 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/40 border-2 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 cursor-pointer">
                        <CardContent className="p-6 text-center">
                            <div className="bg-black text-white px-4 py-3 rounded-t mb-3 font-bold text-base">
                                Chairman
                            </div>
                            <p className="text-base font-semibold">Eng. Zakariya Al-Araibi</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Connecting Line */}
                <div className="flex justify-center mb-12">
                    <div className="w-1 h-16 bg-black org-line org-line-vertical"></div>
                </div>

                {/* Project Manager - Second Level */}
                <div className="flex justify-center mb-16 animate-fade-in animation-delay-200">
                    <Card className="w-80 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/40 border-2 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 cursor-pointer">
                        <CardContent className="p-6 text-center">
                            <div className="bg-black text-white px-4 py-3 rounded-t mb-3 font-bold text-base">
                                Project Manager
                            </div>
                            <p className="text-base font-semibold">Eng. Mohammed Eljhane</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Connecting Lines to Departments */}
                <div className="flex justify-center mb-12">
                    <div className="relative w-full max-w-4xl h-24">
                        <div className="absolute left-1/2 top-0 w-1 h-10 bg-black org-line org-line-vertical" style={{ transform: 'translateX(-0.5px)' }}></div>
                        <div className="absolute left-0 top-10 right-0 h-1 bg-black org-line org-line-horizontal"></div>
                        <div className="absolute top-10 w-1 h-14 bg-black org-line org-line-vertical" style={{ left: '12.5%' }}></div>
                        <div className="absolute top-10 w-1 h-14 bg-black org-line org-line-vertical" style={{ left: '37.5%' }}></div>
                        <div className="absolute top-10 w-1 h-14 bg-black org-line org-line-vertical" style={{ left: '62.5%' }}></div>
                        <div className="absolute top-10 w-1 h-14 bg-black org-line org-line-vertical" style={{ left: '87.5%' }}></div>
                    </div>
                </div>

                {/* Third Level - 4 Departments */}
                <div className="grid grid-cols-4 gap-8 mb-20 max-w-6xl mx-auto">
                    <Card className="bg-card border-primary/30 border-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer animate-fade-in animation-delay-400">
                        <CardContent className="p-4 text-center">
                            <div className="bg-black text-white px-3 py-2 text-sm rounded-t mb-3 font-bold">
                                Media Office
                            </div>
                            <p className="text-sm font-semibold">Mrs. Bushra Yousef</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-card border-primary/30 border-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer animate-fade-in animation-delay-500">
                        <CardContent className="p-4 text-center">
                            <div className="bg-black text-white px-3 py-2 text-sm rounded-t mb-3 font-bold">
                                Planning and Quality Assurance Department
                            </div>
                            <p className="text-sm font-semibold">Eng. Hadeel Samir</p>
                            <p className="text-sm font-semibold">Eng. Alaa Al-Araibi</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-card border-primary/30 border-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer animate-fade-in animation-delay-600">
                        <CardContent className="p-4 text-center">
                            <div className="bg-black text-white px-3 py-2 text-sm rounded-t mb-3 font-bold">
                                Legal Affairs
                            </div>
                            <p className="text-sm font-semibold">Mrs. Khawla Bouzandis</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-card border-primary/30 border-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer animate-fade-in animation-delay-700">
                        <CardContent className="p-4 text-center">
                            <div className="bg-black text-white px-3 py-2 text-sm rounded-t mb-3 font-bold">
                                Secretary
                            </div>
                            <p className="text-sm font-semibold">Mrs. Bushra Yousef</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Fourth Level - Technical Administration and Administrative Affairs */}
                <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Technical Administration Branch */}
                    <div className="animate-fade-in animation-delay-800">
                        <Card className="bg-gradient-to-br from-primary/5 to-transparent border-primary/30 border-2 shadow-xl mb-6">
                            <CardContent className="p-5 text-center">
                                <div className="bg-black text-white px-4 py-3 rounded-t mb-3 font-bold text-base">
                                    Technical Administration
                                </div>
                                <p className="text-base font-semibold">Eng. Zakariya Al-Araibi</p>
                            </CardContent>
                        </Card>

                        {/* Connecting Lines */}
                        <div className="flex justify-center mb-6">
                            <div className="relative w-full h-24">
                                <div className="absolute left-1/2 top-0 w-1 h-10 bg-black org-line org-line-vertical" style={{ transform: 'translateX(-0.5px)' }}></div>
                                <div className="absolute left-0 top-10 right-0 h-1 bg-black org-line org-line-horizontal"></div>
                                <div className="absolute top-10 w-1 h-14 bg-black org-line org-line-vertical" style={{ left: '16.66%' }}></div>
                                <div className="absolute top-10 w-1 h-14 bg-black org-line org-line-vertical" style={{ left: '50%' }}></div>
                                <div className="absolute top-10 w-1 h-14 bg-black org-line org-line-vertical" style={{ left: '83.33%' }}></div>
                            </div>
                        </div>

                        {/* Sub-departments */}
                        <div className="grid grid-cols-3 gap-4 mb-8">
                            <Card className="bg-card border-primary/20 border shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer">
                                <CardContent className="p-2 text-center">
                                    <div className="bg-black text-white px-2 py-1 text-xs rounded-t mb-1 font-bold">
                                        Projects Implementation Department
                                    </div>
                                    <p className="text-xs">Eng. Mohammed El-Jehane</p>
                                </CardContent>
                            </Card>

                            <Card className="bg-card border-border shadow hover:shadow-md transition-all duration-300 hover:scale-110 cursor-pointer">
                                <CardContent className="p-2 text-center">
                                    <div className="bg-black text-white px-2 py-1 text-xs rounded-t mb-1 font-bold">
                                        Procurement
                                    </div>
                                    <p className="text-xs">Eng. Mohammed Ziou</p>
                                </CardContent>
                            </Card>

                            <Card className="bg-card border-border shadow hover:shadow-md transition-all duration-300 hover:scale-110 cursor-pointer">
                                <CardContent className="p-2 text-center">
                                    <div className="bg-black text-white px-2 py-1 text-xs rounded-t mb-1 font-bold">
                                        Design Department
                                    </div>
                                    <p className="text-xs">Eng. Alaa Al-Araibi</p>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Connecting line for Design Department */}
                        <div className="flex justify-end pr-[16.66%] mb-6">
                            <div className="w-1 h-12 bg-black org-line org-line-vertical"></div>
                        </div>

                        {/* Design Department Sub-sections */}
                        <div className="grid grid-cols-3 gap-3 mb-8">
                            {[
                                { title: "Infrastructure", name: "Eng. Marwa Al-Hewari" },
                                { title: "Fire Safety Department", name: "Eng. Iklas Al-Abbur" },
                                { title: "Electrical Department", name: "Eng. Hadeel Samir" },
                                { title: "Plumbing Department", name: "Eng. Haneen Addi" },
                                { title: "Air Conditioning Department", name: "Eng. Alaa Al-Araibi" },
                                { title: "IT Department", name: "Eng. Sohaib Kamash" },
                            ].map((dept, index) => (
                                <Card key={index} className="bg-card border-primary/20 border shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110 cursor-pointer">
                                    <CardContent className="p-2.5 text-center">
                                        <div className="bg-black text-white px-2 py-1 text-xs rounded-t mb-1.5 font-bold leading-tight">
                                            {dept.title}
                                        </div>
                                        <p className="text-xs leading-tight">{dept.name}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Administrative and Financial Affairs Branch */}
                    <div className="animate-fade-in animation-delay-1000">
                        <Card className="bg-gradient-to-br from-primary/5 to-transparent border-primary/20 shadow-lg mb-4">
                            <CardContent className="p-4 text-center">
                                <div className="bg-black text-white px-4 py-2 rounded-t mb-2 font-bold">
                                    Administrative and Financial Affairs
                                </div>
                                <p className="text-sm font-semibold">Mrs. Bushra Yousef</p>
                            </CardContent>
                        </Card>

                        {/* Connecting Lines */}
                        <div className="flex justify-center mb-6">
                            <div className="relative w-full h-24">
                                <div className="absolute left-1/2 top-0 w-1 h-10 bg-black org-line org-line-vertical" style={{ transform: 'translateX(-0.5px)' }}></div>
                                <div className="absolute left-[25%] top-10 right-[25%] h-1 bg-black org-line org-line-horizontal"></div>
                                <div className="absolute top-10 w-1 h-14 bg-black org-line org-line-vertical" style={{ left: '25%' }}></div>
                                <div className="absolute top-10 w-1 h-14 bg-black org-line org-line-vertical" style={{ left: '75%' }}></div>
                            </div>
                        </div>

                        {/* Sub-departments */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <Card className="bg-card border-primary/20 border shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer">
                                <CardContent className="p-3 text-center">
                                    <div className="bg-black text-white px-2 py-2 text-sm rounded-t mb-2 font-bold">
                                        Finance
                                    </div>
                                    <p className="text-sm">Mr. Mouad Al-Gumati</p>
                                </CardContent>
                            </Card>

                            <Card className="bg-card border-primary/20 border shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer">
                                <CardContent className="p-3 text-center">
                                    <div className="bg-black text-white px-2 py-2 text-sm rounded-t mb-2 font-bold">
                                        Human Resources
                                    </div>
                                    <p className="text-sm">Mrs. Bushra Yousef</p>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Connecting line for Finance */}
                        <div className="flex justify-start pl-[25%] mb-6">
                            <div className="w-1 h-12 bg-black org-line org-line-vertical"></div>
                        </div>

                        {/* Finance Sub-sections */}
                        <div className="grid grid-cols-1 gap-3 max-w-xs mx-auto">
                            <Card className="bg-card border-primary/20 border shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110 cursor-pointer">
                                <CardContent className="p-2.5 text-center">
                                    <div className="bg-black text-white px-2 py-1 text-xs rounded-t mb-1.5 font-bold">
                                        Accounts
                                    </div>
                                    <p className="text-xs">Mr. Mouad Al-Gumati</p>
                                </CardContent>
                            </Card>

                            <Card className="bg-card border-primary/20 border shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110 cursor-pointer">
                                <CardContent className="p-2.5 text-center">
                                    <div className="bg-black text-white px-2 py-1 text-xs rounded-t mb-1.5 font-bold">
                                        Purchasing
                                    </div>
                                    <p className="text-xs">Eng. Abd-Elfattah Al-Nahhoum</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrganizationalChart;

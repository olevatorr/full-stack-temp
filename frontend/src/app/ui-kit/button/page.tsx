import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ButtonUIKit() {
    return (
        <div className="container mx-auto py-10">
            {/* Badge 展示區塊 */}
            <section className="mb-12">
                <h1 className="text-2xl font-bold mb-4">Badge 展示</h1>
                <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Badge 變體</h2>
                    <div className="flex flex-wrap gap-4">
                        <div className="flex flex-col items-start gap-2">
                            <Badge>Default Badge</Badge>
                        </div>

                        <div className="flex flex-col items-start gap-2">
                            <Badge variant="secondary">Secondary Badge</Badge>
                        </div>

                        <div className="flex flex-col items-start gap-2">
                            <Badge variant="destructive">Destructive Badge</Badge>
                        </div>

                        <div className="flex flex-col items-start gap-2">
                            <Badge variant="outline">Outline Badge</Badge>
                        </div>
                    </div>
                </div>
            </section>

            {/* 按鈕展示區塊 */}
            <section>
                <h1 className="text-2xl font-bold mb-4">按鈕展示</h1>
                
                <div className="grid gap-8">
                    {/* 變體展示 */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold">按鈕變體</h2>
                        <div className="flex flex-wrap gap-4">
                            <div className="flex flex-col items-start gap-2">
                                <Badge>Default</Badge>
                                <Button>Default Button</Button>
                            </div>

                            <div className="flex flex-col items-start gap-2">
                                <Badge variant="destructive">Destructive</Badge>
                                <Button variant="destructive">Destructive Button</Button>
                            </div>

                            <div className="flex flex-col items-start gap-2">
                                <Badge variant="outline">Outline</Badge>
                                <Button variant="outline">Outline Button</Button>
                            </div>

                            <div className="flex flex-col items-start gap-2">
                                <Badge variant="secondary">Secondary</Badge>
                                <Button variant="secondary">Secondary Button</Button>
                            </div>

                            <div className="flex flex-col items-start gap-2">
                                <Badge>Ghost</Badge>
                                <Button variant="ghost">Ghost Button</Button>
                            </div>

                            <div className="flex flex-col items-start gap-2">
                                <Badge>Link</Badge>
                                <Button variant="link">Link Button</Button>
                            </div>
                        </div>
                    </div>

                    {/* 尺寸展示 */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold">按鈕尺寸</h2>
                        <div className="flex flex-wrap items-end gap-4">
                            <div className="flex flex-col items-start gap-2">
                                <Badge>Small</Badge>
                                <Button size="sm">Small Button</Button>
                            </div>

                            <div className="flex flex-col items-start gap-2">
                                <Badge>Default</Badge>
                                <Button>Default Button</Button>
                            </div>

                            <div className="flex flex-col items-start gap-2">
                                <Badge>Large</Badge>
                                <Button size="lg">Large Button</Button>
                            </div>

                            <div className="flex flex-col items-start gap-2">
                                <Badge>Icon</Badge>
                                <Button size="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
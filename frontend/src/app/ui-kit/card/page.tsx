import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

export default function CardUIKit() {
    return (
        <div className="container mx-auto py-10">
            <h1 className="text-2xl font-bold mb-8">卡片展示</h1>

            <div className="grid gap-8">
                {/* 基本卡片 */}
                <section>
                    <h2 className="text-xl font-semibold mb-4">基本卡片</h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <Card>
                            <CardHeader>
                                <CardTitle>基本卡片標題</CardTitle>
                                <CardDescription>這是一個基本的卡片描述文字。</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>這是卡片的主要內容區域，可以放置任何內容。</p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* 圖片卡片 */}
                <section>
                    <h2 className="text-xl font-semibold mb-4">圖片卡片</h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <Card>
                            <CardHeader>
                                <AspectRatio ratio={16 / 9}>
                                    <Image
                                        src="/default.webp"
                                        alt="Card image"
                                        fill
                                        className="rounded-lg object-cover"
                                    />
                                </AspectRatio>
                                <CardTitle>圖片卡片</CardTitle>
                                <CardDescription>包含圖片的卡片樣式</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>這是卡片的內容區域。</p>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <Button variant="outline">取消</Button>
                                <Button>確認</Button>
                            </CardFooter>
                        </Card>
                    </div>
                </section>

                {/* 商品卡片 */}
                <section>
                    <h2 className="text-xl font-semibold mb-4">商品卡片</h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <Card>
                            <CardHeader>
                                <AspectRatio ratio={1}>
                                    <Image
                                        src="/default.webp"
                                        alt="Product image"
                                        fill
                                        className="rounded-lg object-cover"
                                    />
                                </AspectRatio>
                            </CardHeader>
                            <CardContent>
                                <div className="flex justify-between items-start mb-2">
                                    <CardTitle>商品名稱</CardTitle>
                                    <Badge>新品</Badge>
                                </div>
                                <CardDescription className="mb-4">商品描述內容</CardDescription>
                                <div className="text-2xl font-bold">$999</div>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full">加入購物車</Button>
                            </CardFooter>
                        </Card>
                    </div>
                </section>

                {/* 部落格卡片 */}
                <section>
                    <h2 className="text-xl font-semibold mb-4">部落格卡片</h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <Card>
                            <CardHeader>
                                <AspectRatio ratio={16 / 9}>
                                    <Image
                                        src="/default.webp"
                                        alt="Blog image"
                                        fill
                                        className="rounded-lg object-cover"
                                    />
                                </AspectRatio>
                                <div className="flex gap-2 mt-4">
                                    <Badge variant="secondary">科技</Badge>
                                    <Badge variant="secondary">新聞</Badge>
                                </div>
                                <CardTitle className="mt-2">部落格文章標題</CardTitle>
                                <CardDescription>發布於 2024-03-21</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="line-clamp-3">
                                    這是部落格文章的預覽內容。這裡可以放置文章的摘要或前幾段內容，讓讀者可以快速了解文章大意。
                                </p>
                            </CardContent>
                            <CardFooter>
                                <Button variant="ghost" className="ml-auto">閱讀更多</Button>
                            </CardFooter>
                        </Card>
                    </div>
                </section>

                {/* 個人資料卡片 */}
                <section>
                    <h2 className="text-xl font-semibold mb-4">個人資料卡片</h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <Card>
                            <CardHeader>
                                <div className="flex items-center gap-4">
                                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                                        <Image
                                            src="/default.webp"
                                            alt="Avatar"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <CardTitle>王小明</CardTitle>
                                        <CardDescription>軟體工程師</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">追蹤者</span>
                                        <span className="font-medium">1,234</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">文章</span>
                                        <span className="font-medium">56</span>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button variant="outline" className="w-full">查看檔案</Button>
                            </CardFooter>
                        </Card>
                    </div>
                </section>
            </div>
        </div>
    );
}

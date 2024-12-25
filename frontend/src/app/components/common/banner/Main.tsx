import Image from 'next/image';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import { Card, CardContent } from '@/components/ui/card';

interface imageProps {
    src: string;
    alt: string;
    fill: boolean;
}

interface BannerProps {
    image: imageProps;
    text: string;
}

export default function MainBanner({ image, text }: BannerProps) {
    return (
        <div className="container mx-auto pt-10">
            <AspectRatio ratio={16 / 6} className='bg-muted'>
                <Card>
                    <CardContent>
                        <h1 className="text-center text-4xl text-white font-bold absolute bottom-5 left-5 z-10">{text}</h1>
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill={image.fill}
                                className="rounded-lg size-full object-center"
                            />
                    </CardContent>
                </Card>
            </AspectRatio>
        </div>
    )
}
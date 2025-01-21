import { Card, CardHeader, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

interface ButtonProps {
    variant: string;
    text: string;
    url: string;
}

interface ListCardProps {
    data: {
        title: string;
        description: string;
        btn: ButtonProps;
    };
}

export default function ListCard({ data }: ListCardProps) {
    const router = useRouter();
    
    return (
        <Card 
            className={cn(
                "cursor-pointer transition-colors hover:shadow-md transition-shadow duration-300",
                "relative overflow-hidden"
            )}
            onClick={() => router.push(data.btn.url)}
        >
            <CardHeader>
                <h3 className='text-2xl font-bold'>{data.title}</h3>
                <p className='text-sm text-gray-500'>{data.description}</p>
            </CardHeader>
            <CardFooter>
                <Button asChild>
                    <Link href={data.btn.url}>
                        {data.btn.text}
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}

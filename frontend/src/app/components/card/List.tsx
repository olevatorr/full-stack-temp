import { Card, CardHeader, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface ButtonProps {
    variant: string;
    text: string;
    url: string;
}

interface ListCardProps {
    data: {
        title: string;
        btn: ButtonProps;
    };
}

export default function ListCard({ data }: ListCardProps) {
    console.log(data)
    return (
        <Card>
            <CardHeader>
                <h3>{data.title}</h3>
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
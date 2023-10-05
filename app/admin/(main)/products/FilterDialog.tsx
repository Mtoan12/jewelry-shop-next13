'use client';

import getAllChatLieus from '@/app/api/getAllChatLieus';
import getAllLoaiTrangSucs from '@/app/api/getAllLoaiTrangSucs';
import DialogCustomize from '@/components/DialogCustomize';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/components/ui/use-toast';
import { useEffect, useState } from 'react';

type Props = {
    type: 'chatLieu' | 'loaiTrangSuc';
};

type Content = {
    title: '';
    content: [];
};

const titleMap = {
    chatLieu: 'Chọn chất liệu',
    loaiTrangSuc: 'Chọn loại trang sức',
};
export default function FilterDialog({ type }: Props) {
    const title = titleMap[type] || '';
    const [content, setContent] = useState<any[] | null>(null);
    const { toast } = useToast();

    useEffect(() => {
        const fetchData = async () => {
            try {
                let data = [];
                if (type === 'chatLieu') {
                    data = await getAllChatLieus();
                } else if (type === 'loaiTrangSuc') {
                    data = await getAllLoaiTrangSucs();
                }

                setContent(data);
            } catch (error: any) {
                console.error(error);
                toast({
                    title: error.message,
                    variant: 'destructive',
                });
            }
        };

        fetchData();
    }, [toast, type]);

    const Trigger = <Button className="w-full">{title}</Button>;
    const ContentComponent = (
        <ul className="flex flex-column pl-2 gap-2">
            {content &&
                content.map((item) => {
                    return (
                        <li key={item.id}>
                            <Checkbox id={item.id} />
                            <label
                                htmlFor={item.id}
                                className="pl-1 text-sm cursor-pointer"
                            ></label>
                        </li>
                    );
                })}
        </ul>
    );

    return <DialogCustomize TriggerComponent={Trigger} ContentComponent={ContentComponent} />;
}

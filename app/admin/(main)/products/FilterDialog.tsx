'use client';

import getAllChatLieus from '@/app/api/getAllChatLieus';
import getAllLoaiTrangSucs from '@/app/api/getAllLoaiTrangSucs';
import DialogCustomize from '@/components/DialogCustomize';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/components/ui/use-toast';
import { useEffect, useState } from 'react';
import { CHATLIEUS, LOAITRANGSUCS } from '@/constance/constance';

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
    const [open, setOpen] = useState(false);
    const { toast } = useToast();

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (type === 'chatLieu') {
                    setContent(CHATLIEUS);
                } else if (type === 'loaiTrangSuc') {
                    setContent(LOAITRANGSUCS);
                }
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
    const HeaderTitle = <h2 className="w-full text-center">{title}</h2>;
    const ContentComponent = (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pl-2 gap-5">
            {content &&
                content.map((item) => {
                    const name = type === 'chatLieu' ? item?.chatLieu : item?.loaiTrangSuc;
                    return (
                        <li key={item.id} className="flex items-center">
                            <Checkbox id={item.id} />
                            <label htmlFor={item.id} className="pl-1 text-sm cursor-pointer">
                                {name}
                            </label>
                        </li>
                    );
                })}
        </ul>
    );

    return (
        <DialogCustomize
            open={open}
            setOpen={setOpen}
            TriggerComponent={Trigger}
            HeaderTitle={HeaderTitle}
            ContentComponent={ContentComponent}
        />
    );
}

'use client';

import DialogCustomize from '@/components/DialogCustomize';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/components/ui/use-toast';
import { CHATLIEUS, LOAITRANGSUCS } from '@/constance/constance';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

type Props = {
    type: 'chatLieu' | 'loaiTrangSuc';
    checksList: number[];
    setChecksList: Dispatch<SetStateAction<number[]>>;
};

const titleMap = {
    chatLieu: 'Chọn chất liệu',
    loaiTrangSuc: 'Chọn loại trang sức',
};
export default function FilterDialog({ type, checksList, setChecksList }: Props) {
    const title = titleMap[type] || '';
    const [content, setContent] = useState<any[] | null>(null);
    const [open, setOpen] = useState(false);
    const [checks, setChecks] = useState(checksList);
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

    const handleRenewClick = () => {
        setChecks([]);
    };

    const handleConfirmClick = () => {
        setChecksList(checks);
        setOpen(false);
    };

    const handleCheck = (id: number, checked: any) => {
        if (checked) {
            setChecks([...checks, id]);
        } else {
            const index = checks.indexOf(id);
            const newArr = [...checks];
            newArr.splice(index, 1);
            setChecks([...newArr]);
        }
    };

    const Trigger = <Button className="w-full">{title}</Button>;
    const HeaderTitle = <span className="w-full text-center">{title}</span>;
    const Footer = (
        <>
            <Button variant="secondary" className="w-full mt-2 " onClick={handleRenewClick}>
                Làm mới
            </Button>
            <Button className="w-full mt-2" onClick={handleConfirmClick}>
                Xác nhận
            </Button>
        </>
    );

    const ContentComponent = (
        <form onSubmit={handleConfirmClick}>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pl-2 gap-5">
                {content &&
                    content.map((item) => {
                        const name = type === 'chatLieu' ? item?.chatLieu : item?.loaiTrangSuc;
                        return (
                            <li key={item.id} className="flex items-center">
                                <Checkbox
                                    id={item.id}
                                    checked={checks.includes(item.id)}
                                    onCheckedChange={(checked) => handleCheck(item.id, checked)}
                                />
                                <label htmlFor={item.id} className="pl-1 text-sm cursor-pointer">
                                    {name}
                                </label>
                            </li>
                        );
                    })}
            </ul>
        </form>
    );
    return (
        <DialogCustomize
            open={open}
            setOpen={setOpen}
            TriggerComponent={Trigger}
            HeaderTitle={HeaderTitle}
            ContentComponent={ContentComponent}
            FooterComponent={Footer}
        />
    );
}

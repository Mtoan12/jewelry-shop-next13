import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from './ui/dialog';

type Props = {
    TriggerComponent?: JSX.Element | null;
    HeaderTitle?: JSX.Element | null;
    HeaderDescription?: JSX.Element | null;
    ContentComponent: JSX.Element;
    FooterComponent?: JSX.Element | null;
    open?: boolean;
    setOpen?(open: boolean): void;
};
export default function DialogCustomize({
    TriggerComponent,
    HeaderTitle = null,
    HeaderDescription = null,
    ContentComponent,
    FooterComponent = null,
    open = false,
    setOpen = () => {},
}: Props) {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild onClick={() => setOpen(true)}>
                {TriggerComponent}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader className="border-b-[1px] pb-2">
                    <DialogTitle>{HeaderTitle}</DialogTitle>
                    <DialogDescription>{HeaderDescription}</DialogDescription>
                </DialogHeader>
                {ContentComponent}
                <DialogFooter>{FooterComponent}</DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

import { ComponentPropsWithoutRef, FormEvent, forwardRef, useImperativeHandle, useRef } from "react";

export type FormHandle = {
    clear: () => void;
};

type FormProps = ComponentPropsWithoutRef<'form'> & {
    onSave: (value: Record<string, string>) => void;
}


const Form = forwardRef<FormHandle, FormProps>(({ onSave, children, ...otherProps }, ref) => {
    const form = useRef<HTMLFormElement | null>(null);
    useImperativeHandle(ref, () => ({
        clear: () => {
            console.log('CLEARING');
            form.current?.reset();
        },
    }));
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries()) as Record<string, string>;
        onSave(data);
    };
    return (
        <form onSubmit={handleSubmit} {...otherProps} ref={form}>
            {children}
        </form>
    )
})

export default Form
import {PlusIcon} from "../lib/ui/src/components/Icon/PlusIcon";
import {Button} from "../lib/ui/src/components/Button";
import {SearchField} from "../lib/ui/src/components/Field/SearchField/SearchField";
import {useState} from "react";
import {TextField} from "../lib/ui/src/components/Field/TextField/TextField";
import {Modal} from "../lib/ui/src/components/Modal";
import {SaveIcon} from "../lib/ui/src/components/Icon/SaveIcon";
import {IPageProps} from "../types/props";
import {Navbar} from "../components/Navigation/Navbar";

export const Page = ({children}: IPageProps) => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <div className="flex space-between gap-2">
                <SearchField
                    iconColor={'#fff'}
                    iconWidth={'16'}
                    iconHeight={'16'}
                    radius={'12px 0 0 12px'}/>
                <Button
                    onClick={() => setOpen(true)}
                    radius={'12px'}
                    variant={'primary'}
                >
                    <PlusIcon
                        color={'#fff'}
                    />
                </Button>
            </div>
            <div className="content">
                {children}
            </div>
            <Navbar/>
            <Modal
                open={open}
                onClose={() => {
                    setOpen(false)
                }}
                title='Ajouter une nouvelle tâche'
                titleColor='#0d6efd'
                radius={'12px'}
            >
                <div className="mt-2">
                    <TextField
                        maxwidth='100%'
                        placeholder={'Tâche...'}
                        radius={'12px'}
                        type='text'/>
                </div>
                <div className="mt-2 flex content-end">
                    <Button
                        radius={'12px'}
                        variant={'primary'}
                    >
                        <SaveIcon
                            color={'#fff'}
                        />
                    </Button>
                </div>
            </Modal>
        </>
    )
}
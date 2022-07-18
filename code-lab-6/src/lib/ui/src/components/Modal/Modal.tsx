import {IModalProps} from "./types/props";
import {Button} from "../Button";
import {CloseIcon} from "../Icon/CloseIcon";
import {CSSProperties} from "react";
import './css/modal.scss'

export const Modal =
    ({
         children,
         open,
         title,
         titleColor,
         background,
         onClose,
         radius,
         beforeOnOpen,
         beforeOnClose,
         shadow = '0 26px 40px rgba(0, 0, 0, 0.06)',
     }: IModalProps) => {
        return (
            <>
                <div
                    style={{
                        '--display': open ? 'block' : 'none'
                    } as CSSProperties}
                    className={`overlay ${open ? ' show' : ''}`}>
                    <div className={`modal ${open ? ' show' : ''}`}
                         style={{
                             '--background': background || '#fff',
                             '--radius': radius || 'none',
                             '--shadow': shadow,
                         } as CSSProperties}>
                        <div
                            style={{
                                '--color': titleColor || '#1B1D21',
                            } as CSSProperties}
                            className="modal-header">
                            <div
                                className="flex space-between items-center">
                                <div
                                    className="modal-header-title">
                                    {title}
                                </div>
                                <Button
                                    shadow={'none'}
                                    onClick={onClose}
                                    radius={'none'}
                                    variant={'transparent'}>
                                    <CloseIcon
                                        color={'#0d6efd'}/>
                                </Button>
                            </div>
                        </div>
                        <div className="modal-body">
                            {children}
                        </div>
                    </div>
                </div>
            </>
        )
    }
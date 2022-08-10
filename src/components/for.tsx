import { FC, Fragment } from "react";

type Props = {
    amount: number;
    children?: JSX.Element | JSX.Element[];
}

export const For: FC<Props> = ({ amount, children }) => {
    return (
        <>
            {
                [...Array(amount)].map(
                    (element, index) => <Fragment key={index}>
                        <p>{index}</p>
                        {children}
                    </Fragment>
                )
            }
        </>
    );
}
import { useRouter } from 'next/router';
import { FC, PropsWithChildren, useEffect } from 'react';

interface IPrivatePageProps extends PropsWithChildren {

}

const PrivatePage: FC<IPrivatePageProps> = ({ children }) => {
    return <>{children}</>
}

export default PrivatePage;
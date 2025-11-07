import type {FC, ReactNode} from "react";
import {Layout, Typography} from "antd"

type Props = {
    renderAccountBar: ReactNode
}
const {Header} = Layout
export const HeaderC: FC<Props> = ({renderAccountBar}) => {
    // const navigate = useNavigate()

    // const handleClick: MenuProps['onClick'] = (e) => {
    //     navigate(`/${e.key}`)
    // }
    return <Header  className="flex !bg-white items-center justify-center border-b-[var(--shadow)] border-b-1 !p-0">
        <div className="flex items-center justify-between content-wrapper">
            <Typography.Title className="!whitespace-nowrap" level={3}>KULAB</Typography.Title>
            {renderAccountBar && <div>{renderAccountBar}</div>}
        </div>
    </Header>
}
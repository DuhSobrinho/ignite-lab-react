import { DiscordLogo, IconProps, Lightning } from "phosphor-react";

interface ButtomProps {
    type: 'primary' | ' secondary';
    icon: React.ForwardRefExoticComponent<IconProps>
    text: String;
}

export function Buttom(props: ButtomProps) {
    //const style: String;

    return (

        (props.type === 'primary'
            ? <a href="" className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
                <DiscordLogo size={24} />
                {props.text}
            </a>
            : <a href="" className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors">
                <Lightning size={24} />
                {props.text}
            </a>)
    )
}
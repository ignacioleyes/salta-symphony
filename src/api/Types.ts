import WhatsappIcon from "../../assets/images/whatsapp-icon.png";

export interface ContactInfoItem {
    title: string;
    description: string;
    description2?: string;
    description3?: string;
    whatsapp?: typeof WhatsappIcon;
}
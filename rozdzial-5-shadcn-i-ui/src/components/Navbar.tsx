import Link from "next/link";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { NAV_LINKS } from "../config";

export default function Navbar() {
    return (
        <Tabs className="w-full">
            <TabsList className="m-auto">
                {NAV_LINKS.map((link) => (
                    <TabsTrigger key={link.id} value={link.title}>
                        <Link href={link.href}>{link.title}</Link>
                    </TabsTrigger>
                ))}
            </TabsList>
        </Tabs>
    );
}

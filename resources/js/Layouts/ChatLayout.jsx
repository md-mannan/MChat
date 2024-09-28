import { usePage } from "@inertiajs/react";
import { useEffect } from "react";
const ChatLayout = ({ user, header, children }) => {
    const page = usePage();
    const conversations = page.props.conversations;
    const selectedConversation = page.props.selectedConversation;

    console.log("Conversations", conversations);
    console.log("selectedConversation", selectedConversation);

    useEffect(() => {
        Echo.join("online")
            .here((users) => {
                console.log("Users here:", users);
            })
            .joining((user) => {
                console.log("User joining:", user);
            })
            .leaving((user) => {
                console.log("User Leaving:", user);
            })

            .error((error) => {
                console.error("Echo Error:", error);
            });

        return () => {
            Echo.leave("online");
        };
    }, []);

    return (
        <>
            ChatLayout
            <div>{children}</div>
        </>
    );
};

export default ChatLayout;

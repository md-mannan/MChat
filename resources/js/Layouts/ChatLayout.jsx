import { usePage } from "@inertiajs/react";
const ChatLayout = ({ user, header, children }) => {
    const page = usePage();
    const conversations = page.props.conversations;
    const selectedConversation = page.props.selectedConversation;

    console.log("Conversations", conversations);
    console.log("selectedConversation", selectedConversation);
    return (
        <>
            ChatLayout
            <div>{children}</div>
        </>
    );
};

export default ChatLayout;

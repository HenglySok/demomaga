import { MdMarkEmailUnread } from "react-icons/md";

export default function MessageConfirm() {
    const email = localStorage.getItem('email');
    return (
        <div className="flex items-center justify-center  min-h-screen bg-[url(src/assets/img/bg-image/backgroup.png)] bg-center bg-cover">
            <div className="flex flex-col gap-3 items-center justify-center max-w-md mx-auto p-2 border rounded shadow
         bg-linear-to-t black to-[#00000050] text-text-75">
                <MdMarkEmailUnread
                    size={50}
                />
                <h3>Check your email</h3>
                <p className="text-center">
                    We just sent a verification link to <span className="font-bold">{email}</span>
                </p>
                <button
                    onClick={() => window.open("https://mail.google.com/mail/u/0/#all", "_blank")}
                    className="bg-primary-100 px-5 py-2 rounded-[5px] text-text-100"
                >
                    Go to Gmail →
                </button>
            </div>
        </div>
    )
}

import style from "./Header.module.css";

interface HeaderParams {
    title: string;
}

export default function Header({ title }: HeaderParams) {
    return (
        <div className="my-20">
            <h2 className="text-center text-4xl font-bold uppercase">
                {title}
            </h2>

            <hr className={`${style["hr"]}`} />
        </div>
    );
}

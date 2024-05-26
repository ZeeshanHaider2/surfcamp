import SignupForm from "../_components/Events/SignupForm";

export default function Page(){
    const infoText = (
        <>
        <p className="copy"> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
        <p className="copy">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
        <p className="copy">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
        <p className="copy">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
        <p className="copy">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
        </>
    )

    const headline = "DO you want to stay for our events?"
    return(
        <main className="events-page">
            <SignupForm infoText={infoText} headline={headline}/>
        </main>
    )
}    
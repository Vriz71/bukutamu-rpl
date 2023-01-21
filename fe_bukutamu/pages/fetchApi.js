export default function Fetch({ externalPostData }) {
    return (
        <div>
            <main>
                <h1>Data</h1>

                <div >
                    {externalPostData.map((data) => {
                        return (
                            <div key={data.id}>
                                {/* disini ganti jadi data.message aja */}
                                <h3>{data.url}</h3>
                            </div>
                        );
                    })}
                </div>
            </main>
        </div>
    );
}

export async function getStaticProps() {
    // nanti url nya ganti, yang ini di komentarin aja
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");

    const data = await response.json();

    return {
        props: {
            externalPostData: data,
        },
    };
}

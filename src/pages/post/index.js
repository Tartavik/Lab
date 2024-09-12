const MainPagePost = ({data}) => {
    return (
        <div>
            {data}
            Post Page Main
        </div>
    )
}

export default MainPagePost

export async function getServerSideProps(ctx) {
    // // Fetch data from external API
    // const res = await fetch(`https://.../data`)
    const data = 'Hello'
;
    console.log(ctx, 'dfjjsdfjlsdjklfjposdjopfjposdjpojsfdpoj');

    return {
        props: {
            data: data, 
        }
    }
  }
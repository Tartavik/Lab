import { useRouter } from "next/router";

const Post = ({data, index}) => {
    const route = useRouter();

    console.log(route);

    return (
        <div>
            {data}
            Post {index}
            <button onClick={() => route.back()}>Back</button>
            <button onClick={() => route.push(`/post/${Number(index) + 1}`)}>Next post</button>
        </div>
    )
}

export default Post

export async function getServerSideProps(ctx) {

    return {
        props: {
            data: 'Hello',
            index: ctx.params.id,
        }
    }
  }
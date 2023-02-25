import { listMovies, getMovie, listQuotes } from "ehab-sdk"

test("check the movies returned", async () => {
    const a = await listMovies();
    expect(a.docs.length).toBe(8)
})

test("check a movie returned", async () => {
    const a = await getMovie("5cd95395de30eff6ebccde56");
    expect(a.docs[0].name).toBe("The Lord of the Rings Series")
})

test("check a movie returned", async () => {
    const a = await listQuotes("5cd95395de30eff6ebccde5d");
    //console.log(JSON.stringify(a, null, 2))
    expect(a.docs.length).toBe(872)
})
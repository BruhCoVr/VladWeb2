import RecordsPageClient from "./RecordsPageClient";

export default async function Records() {

    const fetchOwnedAlbums = async () => {
      try {
        const response = await fetch(
          `https://api.discogs.com/users/${process.env.DISCOGS_USERNAME}/collection/folders/0/releases?token=${process.env.DISCOGS_TOKEN}`
        );
        const data = await response.json();

        // Sort albums alphabetically by artist name
        const sortedAlbums = data.releases.sort((a, b) =>
          a.basic_information.artists[0].name.localeCompare(b.basic_information.artists[0].name)
        );

        return sortedAlbums;

      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    };

    const fetchedAlbums = await fetchOwnedAlbums();

    if (!fetchedAlbums) {
      return null;
    }

  return (
    <RecordsPageClient albums={fetchedAlbums} />
  );
}

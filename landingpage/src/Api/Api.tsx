export default function getThemes(): Promise<{ themes: [] }> {
    return new Promise((resolve, reject) => {
        (async () => {
            const rawResponse = await fetch('https://api.kamodb.de:5000/themes', {
              method: 'GET',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
            });
            const content = await rawResponse.json();
          
            resolve(content)
        })();
      })
}
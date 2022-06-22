from requests import get

class TMDB:
    def __init__(self, api_key=None, page=0, language=0):
        self.api_key = str(api_key)
        self.page = str(page)
        self.language = ['en-US', 'pt-BR'][language]

    def get_videos(self, movie_id):

        base_url =  'https://api.themoviedb.org/3/movie'
        url = base_url+'/'+str(667257)+'/videos?api_key='+self.api_key+'&language='+self.language
        
        try:
            response = get(url).json()
        except ValueError:
            print("Request error")

        return None if response['results'] == [] else response['results'][0]['key']

    def top_rated_tv(self):      

        base_url =  'https://api.themoviedb.org/3/tv/top_rated?'

        url = base_url+'api_key='+self.api_key+'&language='+self.language+'&page='+self.page
        
        print('antes\n')

        try:
            response = get(url).json()
        except ValueError:
            print("Request error")
        

        print('depois\n')
        list_movies = []

        for movie in response['results']:

            values = [
                'name', 'overview', 'poster_path', 
                'backdrop_path', 'vote_average', 'first_air_date'
            ]

            values_movie = { key: movie[key] for key in values }

            list_movies.append(values_movie)

        return list_movies


top_movies = TMDB('68e356ae11aabb4bf082a0a61801672e', 1, 0).top_rated_tv()


for i in top_movies:

    print(i)
    print('\n\n')
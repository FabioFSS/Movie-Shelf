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
            
        

    def top_rated(self):      

        base_url =  'https://api.themoviedb.org/3/movie/top_rated?'
        url = base_url+'api_key='+self.api_key+'&language='+self.language+'&page='+self.page
        
        try:
            response = get(url).json()
        except ValueError:
            print("Request error")
        
        list_movies = []

        for movie in response['results']:

            values = [
                'original_title', 'overview', 'poster_path', 
                'backdrop_path', 'vote_average', 'release_date'
            ]

            values_movie = { key: movie[key] for key in values }

            if movie['id'] == None:
                continue

            values_movie['trailer'] = str(self.get_videos(movie['id']))

            list_movies.append(values_movie)

        return list_movies


    def get_credits(self, movie_id):

        base_url =  'https://api.themoviedb.org/3/movie'
        url = base_url+'/'+str(movie_id)+'/credits?api_key='+self.api_key+'&language='+self.language
        
        try:
            response = get(url).json()
        except ValueError:
            print("Request error")

        casts_details = []
        max_casts = 0

        values = ['name', 'profile_path']

        for credits in response['cast']:

            cast = { key: credits[key] for key in values}
            
            casts_details.append(cast)
            max_casts += 1
            if max_casts == 5: break

        return casts_details

    def search_movie(self, query):

        base_url = 'https://api.themoviedb.org/3/search/movie'
        url = base_url+'?api_key='+self.api_key+'&query='+str(query)
        
        try:
            response = get(url).json()
        except ValueError:
            print("Request error")

        return response['results']

    def get_details_season(self, tv_id, season_number):

        base_url = 'https://api.themoviedb.org/3/tv'
        url = base_url+'/'+str(tv_id)+'/season/'+str(season_number)+'?api_key='+self.api_key+'&language='+self.language
        
        try:
            response = get(url).json()
        except ValueError:
            print("Request error")
               
        season = {}
        season['number'] = season_number
        season['description'] = response['overview']
        season['img_folder'] = response['poster_path']

        return season

    def get_details_episode(self, tv_id, season_number, episode_number):

        base_url = 'https://api.themoviedb.org/3/tv'
        url = base_url+'/'+str(tv_id)+'/season/'+str(season_number)+'?api_key='+self.api_key+'&language='+self.language
        
        try:
            response = get(url).json()
        except ValueError:
            print("Request error")
               
        # episode = {}
        # episode['description'] = response['episode'][episode_number][]
        # episode['title'] = response['overview']
        # episode['number'] = episode_number
        # episode['img_folder'] = response['still_path']

        return response

if __name__ == '__main__':

    movies = TMDB('68e356ae11aabb4bf082a0a61801672e', 1, 0)

    # print(movies.top_rated())
    # print(movies.get_details_season(55, 1))
    # print(movies.get_videos(55))
    # print(movies.get_credits(55))
    # print(movies.search_movie('spider'))
    print(movies.get_details_episode(50, 1, 1))
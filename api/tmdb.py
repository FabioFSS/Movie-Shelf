from requests import get

class TMDB:
    def __init__(self, api_key=None, page=0, language=0):
        self.api_key = str(api_key)
        self.page = str(page)
        self.language = ['en-US', 'pt-BR'][language]

    def get_videos(self, movie_id):

        base_url =  'https://api.themoviedb.org/3/movie'
        url = base_url+'/'+str(movie_id)+'/videos?api_key='+self.api_key+'&language='+self.language
        
        try:
            response = get(url).json()
        except ValueError:
            print("Request error")

        return response['results'][0]['key']

    def top_rated(self):      

        base_url =  'https://api.themoviedb.org/3/movie/top_rated?'
        url = base_url+'api_key='+self.api_key+'&language='+self.language+'&page='+self.page
        
        try:
            response = get(url).json()
        except ValueError:
            print("Request error")
        
        list_movies = []

        for movie in response['results']:

            values_movie = {}
            values_movie['title'] = movie['original_title']
            values_movie['description'] = movie['overview']
            values_movie['img_front'] = movie['poster_path']
            values_movie['img_back'] = movie['backdrop_path']
            # values_movie['trailer'] = self.get_videos(movie['id'])
            values_movie['vote'] = movie['vote_average']
            values_movie['launch_date'] = movie['release_date']
            
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

        for credits in response['cast']:
            cast = {}
            cast['name'] = credits['name']
            cast['picture'] = credits['profile_path']
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
               
        episode = {}
        # episode['description'] = response['episode'][episode_number][]
        # episode['title'] = response['overview']
        # episode['number'] = episode_number
        # episode['img_folder'] = response['still_path']

        return response

if __name__ == '__main__':

    movies = TMDB('68e356ae11aabb4bf082a0a61801672e', 1, 0)

    # print(movies.top_rated())
    # print(movies.get_details(55))
    # print(movies.get_videos(55))
    # print(movies.get_credits(55))
    # print(movies.search_movie('spider'))
    # print(movies.get_details_episode(50, 1, 1))
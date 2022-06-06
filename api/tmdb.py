from requests import get

class TMDB:
    def __init__(self, api_key=None, page=0, language=0):
        self.api_key = str(api_key)
        self.page = str(page)
        self.language = ['en-US', 'pt-BR'][language]

    def top_rated(self):       
        base_url =  'https://api.themoviedb.org/3/movie/top_rated?'
        url = base_url+'api_key='+self.api_key+'&language='+self.language+'&page='+self.page
        
        try:
            response = get(url).json()
        except ValueError:
            print("Request error")

        # id, poster_path, backdrop_path, trailer, release_date, vote_average
        list_movies = []

        for movie in response['results']:
            list_movies.append(movie['id'])
            list_movies.append(movie['original_title'])
            list_movies.append(movie['poster_path'])
            list_movies.append(movie['backdrop_path'])
            list_movies.append(movie['release_date'])
            list_movies.append(movie['vote_average'])
            list_movies.append(movie['overview'])
            break
        print(list_movies)

        return 'tudo certo!'

    def get_details(self, movie_id):

        base_url =  'https://api.themoviedb.org/3/movie'
        url = base_url+'/'+str(movie_id)+'?api_key='+self.api_key+'&language='+self.language
        
        try:
            response = get(url).json()
        except ValueError:
            print("Request error")

        return response

    def get_videos(self, movie_id):

        base_url =  'https://api.themoviedb.org/3/movie'
        url = base_url+'/'+str(movie_id)+'/videos?api_key='+self.api_key+'&language='+self.language
        
        try:
            response = get(url).json()
        except ValueError:
            print("Request error")

        return response

    def get_credits(self, movie_id):

        base_url =  'https://api.themoviedb.org/3/movie'
        url = base_url+'/'+str(movie_id)+'/credits?api_key='+self.api_key+'&language='+self.language
        
        try:
            response = get(url).json()
        except ValueError:
            print("Request error")

        return response['cast'][0:5]

    def search_movie(self, query):

        base_url =  'https://api.themoviedb.org/3/search/movie'
        url = base_url+'?api_key='+self.api_key+'&query='+str(query)
        
        try:
            response = get(url).json()
        except ValueError:
            print("Request error")

        return response['results']

if __name__ == '__main__':

    movies = TMDB('68e356ae11aabb4bf082a0a61801672e', 1, 0)

    print(movies.top_rated())
    # print(movies.get_details(55))
    # print(movies.get_videos(55))
    # print(movies.get_credits(55))
    # print(movies.search_movie('spider'))
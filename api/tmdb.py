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

        return response['results']

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
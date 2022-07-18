from requests import get


class TMDB():
    def __init__(self, api_key=None, page=0, language=0):
        self.api_key = str(api_key)
        self.page = str(page)
        self.language = ['en-US', 'pt-BR'][language]

    def get_details_movie(self, movie_id):

        url1 = 'https://api.themoviedb.org/3/movie/' + \
            str(movie_id)+'?api_key='+self.api_key+'&language='+self.language
        try:
            response1 = get(url1).json()
        except ValueError:
            print("Request error")

        movie_detail = response1
        backdrop_path = 'https://image.tmdb.org/t/p/original/' + \
            str(response1['backdrop_path'])
        poster_path = 'https://image.tmdb.org/t/p/w342/' + \
            str(response1['poster_path'])

        url1 = 'https://api.themoviedb.org/3/movie/' + \
            str(movie_id)+'/credits?api_key=' + \
            self.api_key+'&language='+self.language
        try:
            response2 = get(url1).json()
        except ValueError:
            print("Request error")

        casts = response2['cast']

        url1 = 'https://api.themoviedb.org/3/movie/' + \
            str(movie_id)+'/videos?api_key=' + \
            self.api_key+'&language='+self.language

        try:
            response2 = get(url1).json()
        except ValueError:
            print("Request error")

        trailer = response2['results'][0]['key']

        return {'details': movie_detail, 'poster': poster_path,
                'backdrop': backdrop_path, 'casts': casts, 'trailer_id': trailer}

    def get_details_tv(self, tv_id):

        url1 = 'https://api.themoviedb.org/3/tv/' + \
            str(tv_id)+'?api_key='+self.api_key+'&language='+self.language
        try:
            response1 = get(url1).json()
        except ValueError:
            print("Request error")

        tv_detail = response1
        poster_path = 'https://image.tmdb.org/t/p/w342/' + \
            str(response1['poster_path'])
        backdrop_path = 'https://image.tmdb.org/t/p/original/' + \
            str(response1['backdrop_path'])

        url1 = 'https://api.themoviedb.org/3/tv/' + \
            str(tv_id)+'/credits?api_key=' + \
            self.api_key+'&language='+self.language
        try:
            response2 = get(url1).json()
        except ValueError:
            print("Request error")

        casts = response2['cast']

        return {'details': tv_detail, 'poster': poster_path,
                'backdrop': backdrop_path, 'casts': casts}

    def get_list_seasons(self, tv_id):

        url1 = 'https://api.themoviedb.org/3/tv/' + \
            str(tv_id)+'?api_key='+self.api_key+'&language='+self.language
        try:
            details = get(url1).json()
        except ValueError:
            print("Request error")

        number_seasons = int(details['last_episode_to_air']['season_number'])

        list_details_seasons = []

        for season in range(number_seasons):

            url1 = 'https://api.themoviedb.org/3/tv/' + \
                str(tv_id)+'/season/'+str(season+1)+'?api_key='+self.api_key+'&language='+self.language
            try:
                response1 = get(url1).json()
            except ValueError:
                print("Request error")
            poster_path = 'https://image.tmdb.org/t/p/original/'+response1['poster_path']

            list_details_seasons.append({'number_season': season+1, 'poster_path': poster_path})

        return list_details_seasons

    def top_rated(self):

        base_url = 'https://api.themoviedb.org/3/movie/top_rated?'
        url = base_url+'api_key='+self.api_key + \
            '&language='+self.language+'&page='+self.page

        try:
            response = get(url).json()
        except ValueError:
            print("Request error")

        return response

    def top_rated_tv(self):

        base_url = 'https://api.themoviedb.org/3/tv/top_rated?'

        url = base_url+'api_key='+self.api_key + \
            '&language='+self.language+'&page='+self.page


        try:
            response = get(url).json()
        except ValueError:
            print("Request error")

        return response

    def upcoming_movies(self):
        base_url = 'https://api.themoviedb.org/3/movie/upcoming?'

        url = base_url+'api_key='+self.api_key + \
            '&language='+self.language+'&page='+self.page

        try:
            response = get(url).json()
        except ValueError:
            print("Request error")

        return response

    def latest_tv_shows(self):
        base_url = 'https://api.themoviedb.org/3/tv/airing_today?'

        url = base_url+'api_key='+self.api_key + \
            '&language='+self.language+'&page='+self.page

        try:
            response = get(url).json()
        except ValueError:
            print("Request error")

        return response


    def search(self, query):

        base_url = 'https://api.themoviedb.org/3/search/movie'
        url = base_url+'?api_key='+self.api_key+'&query='+str(query)

        try:
            movie = get(url).json()
        except ValueError:
            print("Request error")

        base_url = 'https://api.themoviedb.org/3/search/tv'
        url = base_url+'?api_key='+self.api_key+'&query='+str(query)

        try:
            tv = get(url).json()
        except ValueError:
            print("Request error")

        return [movie, tv]

    def get_details_season(self, tv_id, season_number):

        base_url = 'https://api.themoviedb.org/3/tv'
        url = base_url+'/'+str(tv_id)+'/season/'+str(season_number) + \
            '?api_key='+self.api_key+'&language='+self.language

        try:
            response = get(url).json()
        except ValueError:
            print("Request error")

        return response

    def get_details_episode(self, tv_id, season_number, episode_number):

        base_url = 'https://api.themoviedb.org/3/tv'
        url = base_url+'/'+str(tv_id)+'/season/'+str(season_number) + \
            '/episode/'+str(episode_number)+'?api_key='+self.api_key+'&language='+self.language

        try:
            response = get(url).json()
        except ValueError:
            print("Request error")

        return response


if __name__ == '__main__':

    movies = TMDB('68e356ae11aabb4bf082a0a61801672e', 1, 0)

    # print(movies.top_rated())
    # print(movies.get_details_season(66732, 1))
    # print(movies.get_videos(55))
    # print(movies.get_credits(55))
    # print(movies.search('the boys'))
    print(movies.get_details_episode(60574, 2, 3))
    # print(movies.get_details_tv(92782))
    # print(movies.get_list_seasons(66732))
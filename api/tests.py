from tmdb import TMDB
from django.views import View
# Create your tests here.

class JsonTableData(View):
     
    def teste(self):
        response = TMDB('68e356ae11aabb4bf082a0a61801672e', 1, 0).top_rated()
        print(response)

    def post(self, request):
        response = TMDB('68e356ae11aabb4bf082a0a61801672e', 1, 0).top_rated()
        print(response)
        # data = JsonTableData(movie="blabla", tv_shows='blabla')
        # data.save()

if __name__ == '__main__':
    JsonTableData().teste()
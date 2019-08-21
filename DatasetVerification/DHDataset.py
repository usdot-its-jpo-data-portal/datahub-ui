class DHDataset():

    def __init__(self, id=None, name=None, url=None, source=None):
        self._id = id
        self._name = name
        self._url = url
        self._source = source

    @property
    def id(self):
        return self._id

    @id.setter
    def id(self, value):
        self._id = value

    @property
    def name(self):
        return self._name

    @name.setter
    def name(self, value):
        self._name = value
    
    @property
    def url(self):
        return self._url

    @url.setter
    def url(self, value):
        self._url = value

    @property
    def source(self):
        return self._source

    @source.setter
    def source(self, value):
        self._source = value

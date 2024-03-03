---
title: A cool Demo Project
jupyter:
  nbformat: 4
  nbformat_minor: 5
  kernelspec:
     display_name: Python 2
     language: python
     name: python2
  language_info:
     codemirror_mode:
       name: ipython
       version: 2
     file_extension: ".py"
     mimetype: "text/x-python"
     name: "python"
     nbconvert_exporter: "python"
     pygments_lexer: "ipython2"
     version: "2.7.15"
---

```code
%pip install specklepy
%pip install pandas
from specklepy.objects import Base
from specklepy.api.client import SpeckleClient
from specklepy.api.wrapper import StreamWrapper
from specklepy.api.credentials import get_default_account
from specklepy.transports.server import ServerTransport
from specklepy.api import operations
import pandas as pd
```


```code
wrapper = StreamWrapper("https://speckle.xyz/streams/f8fdca34e8/commits/415b381d6c")
client = wrapper.get_client("743d2df1ec7e610a0a3adb9b2167414542c18ca328")
transport = wrapper.get_transport()
```


```code
def get_data_frame(base:Base):
    id = []
    name = []
    volume = []
    area = []

    for e in base.elements:
        id.append(e.id)
        name.append(e.speckleType.split(".")[-1])
        volume.append(e.volume)
        area.append(e.area)

    data = {
        "id" : id,
        "Name" : name,
        "Volume" : volume,
        "Area" : area
    }

    return pd.DataFrame(data=data)
```

# A cool Demo Project
__Povl Filip Sonne-Frederiksen__ *(03/02/2024 21:55:50)*

LINK Arkitektur

Welcome to this fancy model.

## Report

<div id="TwoCol" style="display: flex;">
<div id="col1" style="flex: 1;">
<iframe id="iframe"
src="https://speckle.xyz/embed?stream=f8fdca34e8&commit=415b381d6c&overlay=87b8c5736a&transparent=true&amp;autoload=true&amp;hidecontrols=true&amp;hidesidebar=true"
width="600" height="400" frameborder="0">
</iframe>
</div>
<div id="col2" style="flex: 1">
<h4>Content</h4>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget nullam non nisi est. Lectus nulla at volutpat diam ut. Id nibh tortor id aliquet lectus proin nibh nisl condimentum. Egestas integer eget aliquet nibh praesent. Duis at consectetur lorem donec massa sapien. Accumsan tortor posuere ac ut consequat semper viverra nam. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Fermentum leo vel orci porta non pulvinar. Egestas sed sed risus pretium. Laoreet id donec ultrices tincidunt. Etiam dignissim diam quis enim lobortis. Ut porttitor leo a diam. Eget nunc scelerisque viverra mauris in aliquam. Est lorem ipsum dolor sit amet consectetur. Ornare suspendisse sed nisi lacus sed viverra tellus in. Ac turpis egestas integer eget. Felis donec et odio pellentesque diam volutpat commodo sed egestas. Urna neque viverra justo nec ultrices. Blandit turpis cursus in hac habitasse.
</p>
</div>
</div>


### Enclosing  Bubbles

<iframe src="https://speckle.xyz/embed?stream=f8fdca34e8&object=579f5fddca97878e525f2adf11277d9e&transparent=true&autoload=true&hidecontrols=true&hidesidebar=true" width="600" height="400"frameborder="0"></iframe>

| speckleType | area | volume |
| ----------- | ----------- |----------- |
| Brep_1 | 229.75 | 0.00 | 
| Brep_2 | 2442.56 | 345.39 | 




```code
get_data_frame(operations.receive(obj_id='579f5fddca97878e525f2adf11277d9e', remote_transport=transport))
```

### Slabs And Steps

<iframe src="https://speckle.xyz/embed?stream=f8fdca34e8&object=cc9cc5550310e8f13819d6964674ebfe&transparent=true&autoload=true&hidecontrols=true&hidesidebar=true" width="600" height="400"frameborder="0"></iframe>

| speckleType | area | volume |
| ----------- | ----------- |----------- |
| Brep_1 | 416.33 | 0.00 | 
| Brep_2 | 415.37 | 71.44 | 
| Brep_3 | 776.41 | 599.30 | 
| Brep_4 | 14.07 | 0.00 | 
| Brep_5 | 711.87 | 120.28 | 
| Brep_6 | 36.72 | 0.00 | 
| Brep_7 | 8.72 | 0.00 | 
| Brep_8 | 143.71 | 0.00 | 
| Brep_9 | 250.30 | 0.00 | 
| Brep_10 | 80.50 | 0.00 | 
| Brep_11 | 31.69 | 0.00 | 
| Brep_12 | 1134.37 | 169.73 | 
| Brep_13 | 1111.62 | 159.47 | 
| Brep_14 | 246.56 | 105.10 | 
| Brep_15 | 302.63 | 0.00 | 
| Brep_16 | 4.26 | 0.00 | 
| Brep_17 | 39.93 | 1.83 | 
| Brep_18 | 416.73 | 58.24 | 
| Brep_19 | 1.94 | 0.13 | 
| Brep_20 | 27.14 | 0.00 | 
| Brep_21 | 79.61 | 19.91 | 
| Brep_22 | 13.79 | 0.62 | 
| Brep_23 | 13.87 | 0.63 | 
| Brep_24 | 58.06 | 6.86 | 
| Brep_25 | 564.11 | 101.97 | 
| Brep_26 | 287.28 | 43.35 | 
| Brep_27 | 35.11 | 4.67 | 
| Brep_28 | 801.59 | 161.61 | 




```code
get_data_frame(operations.receive(obj_id='cc9cc5550310e8f13819d6964674ebfe', remote_transport=transport))
```

### Structural Columns

<iframe src="https://speckle.xyz/embed?stream=f8fdca34e8&object=84b8986d1e931136de2cfbd085375158&transparent=true&autoload=true&hidecontrols=true&hidesidebar=true" width="600" height="400"frameborder="0"></iframe>

| speckleType | area | volume |
| ----------- | ----------- |----------- |
| Brep_1 | 55.74 | 2.23 | 
| Brep_2 | 55.74 | 2.23 | 
| Brep_3 | 55.74 | 2.23 | 
| Brep_4 | 55.74 | 2.23 | 
| Brep_5 | 55.74 | 2.23 | 
| Brep_6 | 55.74 | 2.23 | 
| Brep_7 | 55.74 | 2.23 | 
| Brep_8 | 55.74 | 2.23 | 
| Brep_9 | 55.74 | 2.23 | 
| Brep_10 | 55.74 | 2.23 | 
| Brep_11 | 55.74 | 2.23 | 
| Brep_12 | 55.74 | 2.23 | 




```code
get_data_frame(operations.receive(obj_id='84b8986d1e931136de2cfbd085375158', remote_transport=transport))
```

### Building Base

<iframe src="https://speckle.xyz/embed?stream=f8fdca34e8&object=fe7b8733254f25544e5d3b674f26846e&transparent=true&autoload=true&hidecontrols=true&hidesidebar=true" width="600" height="400"frameborder="0"></iframe>

| speckleType | area | volume |
| ----------- | ----------- |----------- |
| Brep_1 | 1814.98 | 0.00 | 
| Brep_2 | 363.99 | 50.57 | 




```code
get_data_frame(operations.receive(obj_id='fe7b8733254f25544e5d3b674f26846e', remote_transport=transport))
```

### Escalators

<iframe src="https://speckle.xyz/embed?stream=f8fdca34e8&object=0faa4efb5f3890661972a46c0c2713b4&transparent=true&autoload=true&hidecontrols=true&hidesidebar=true" width="600" height="400"frameborder="0"></iframe>

| speckleType | area | volume |
| ----------- | ----------- |----------- |
| Brep_1 | 93.26 | 29.48 | 
| Brep_2 | 30.23 | 1.37 | 
| Brep_3 | 30.23 | 1.37 | 
| Brep_4 | 30.23 | 1.37 | 
| Brep_5 | 30.23 | 1.37 | 




```code
get_data_frame(operations.receive(obj_id='0faa4efb5f3890661972a46c0c2713b4', remote_transport=transport))
```

### Railings

<iframe src="https://speckle.xyz/embed?stream=f8fdca34e8&object=968b2ad2937bcfdcbd140dd54122c042&transparent=true&autoload=true&hidecontrols=true&hidesidebar=true" width="600" height="400"frameborder="0"></iframe>

| speckleType | area | volume |
| ----------- | ----------- |----------- |
| Brep_1 | 51.96 | 1.25 | 
| Brep_2 | 30.41 | 0.00 | 
| Brep_3 | 49.61 | 1.20 | 
| Brep_4 | 46.74 | 2.15 | 
| Brep_5 | 58.50 | 2.64 | 
| Brep_6 | 7.29 | 0.32 | 
| Brep_7 | 57.34 | 2.57 | 
| Brep_8 | 32.88 | 1.48 | 
| Brep_9 | 28.00 | 1.26 | 
| Brep_10 | 10.75 | 0.48 | 
| Brep_11 | 60.47 | 2.79 | 
| Brep_12 | 38.21 | 1.77 | 
| Brep_13 | 133.79 | 6.06 | 
| Brep_14 | 46.73 | 2.13 | 
| Brep_15 | 45.72 | 2.09 | 




```code
get_data_frame(operations.receive(obj_id='968b2ad2937bcfdcbd140dd54122c042', remote_transport=transport))
```


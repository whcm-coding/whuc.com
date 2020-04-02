import hug
from falcon import HTTP_412, HTTP_400

data = [{
    'img':
    'https://img.alicdn.com/tfscom/i3/687132834/TB27pQvefJNTKJjSspoXXc6mpXa_!!687132834.jpg_280x380xz.jpg',
    'title': '【马丘比丘】13PLUS独立自制羊毛手打针织衫毛衣外套',
    'id': 0,
    'price': '123.3'
}, {
    'img':
    'https://img.alicdn.com/imgextra/i3/677614416/TB2vibMjfBNTKJjSszbXXaFrFXa_!!677614416-0-beehive-scenes.jpg_280x380xz.jpg',
    'title': '嬉游记原创 休闲两面穿外套 宽松显瘦大衣女中长秋冬新款',
    'id': 1,
    'price': '98'
}, {
    'img':
    'https://img.alicdn.com/tfscom/i2/2770864370/TB2vGH6cqagSKJjy0FhXXcrbFXa_!!2770864370.jpg_280x380xz.jpg',
    'title': 'carihome男朋友抱枕可爱大玩偶娃娃沙发床上靠枕陪你睡觉长条抱枕',
    'id': 2,
    'price': '77.9'
}, {
    'img':
    'https://img.alicdn.com/imgextra/i1/75071169/TB2V2r7jvBNTKJjSszcXXbO2VXa_!!75071169-2-beehive-scenes.png_460x460xz.jpg',
    'title': '及木创意杂志架 北欧简约角几移动沙发边几  实木布艺小茶几CJ009',
    'id': 3,
    'price': '666'
}, {
    'img':
    'https://img.alicdn.com/tfscom/i2/49456732/TB2bmbSXT3myKJjSZFCXXbXxXXa_!!49456732.jpg',
    'title': '阳台桌椅三件套北欧休闲桌椅铁艺茶几组合庭院户外咖啡厅折叠桌椅',
    'id': 4,
    'price': '88'
}, {
    'img':
    'https://img.alicdn.com/imgextra/i1/2872352574/TB2AXzYmvBNTKJjSszbXXaFrFXa_!!2872352574-0-beehive-scenes.jpg_460x460xz.jpg',
    'title': 'PLAFIELD IcyNude秋冬荷叶边开衩袖修身显瘦鱼尾西装外套女',
    'id': 5,
    'price': '1288'
}]


@hug.response_middleware()
def process_data(request, response, resource):
    response.set_header('Access-Control-Allow-Origin', '*')


@hug.get(output=hug.output_format.json)
def items(page: int):
    if page == 1:
        return data[0:2]
    if page == 2:
        return data[2:4]
    if page == 3:
        return data[4:6]
    return {'error': 'page参数1至3'}


@hug.get(output=hug.output_format.json, versions=1)
def items(page: int, response):
    if page == 1:
        return data[0:2]
    if page == 2:
        response.status = HTTP_400
        return '哈哈，逮住你啦!'
    if page == 3:
        return data[4:6]
    return {'error': 'page参数1至3'}


@hug.post()
def postpage(page: int, response):
    if page == 1 or page == 2 or page == 3:
        return {'msg': 'success'}
    response.status = HTTP_412
    return {'error': 'page参数1至3'}


@hug.post()
def upload_file():
    return {'msg': 'success'}

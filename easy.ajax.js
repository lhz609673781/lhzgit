/**
 * Created by uuui on 2016/11/17.
 */
/**
 * jQuery.Ajax 1.0
 * User: 郏高阳
 * Date: 2013-8-15
 * 该框架依赖jquery,请先引入jquery1.5+版本。
 * 使用方法：
 */
;
(function (window, $) {
    var EasyAjax = {};
    var _ajaxType = ['get', 'post', 'put', 'delete', 'options', 'head', 'connect', 'trace'];
    var _ajaxDataType = ['json', 'xml', 'html', 'script'];
    /**
     * 标准AJAX方法
     * @param config Ajax需要参数
     * @param callback ajax结束回掉函数
     */
    EasyAjax.ajax = function (config, callback) {
        _ajax(config, callback);
    };
    /**
     * Ajax Get请求
     * @param config Ajax需要参数
     * @param callback ajax结束回掉函数
     */
    EasyAjax.ajax_Get = function (config, callback) {
        config.type = _ajaxType[0];
        _ajax(config, callback);
    };
    /**
     * Ajax Post请求
     * @param config Ajax需要参数
     * @param callback ajax结束回掉函数
     */
    EasyAjax.ajax_Post = function (config, callback) {
        config.type = _ajaxType[1];
        _ajax(config, callback);
    };
    /**
     * Ajax Get请求数据格式是JSON
     * @param config Ajax需要参数可只配URL
     * @param callback ajax结束回掉函数
     */
    EasyAjax.ajax_Get_Json = function (config, callback) {
        config.type = _ajaxType[0];
        config.dataType = _ajaxDataType[0];
        _ajax(config, callback);
    };
    /**
     * Ajax post请求数据格式是JSON
     * @param config Ajax需要参数可只配URL
     * @param callback ajax结束回掉函数
     */
    EasyAjax.ajax_Post_Json = function (config, callback) {
        config.type = _ajaxType[1];
        config.dataType = _ajaxDataType[0];
        _ajax(config, callback);
    };
    /**
     * 文件上传Ajax
     * @param config
     * @param callback
     */
    EasyAjax.ajax_Upload_File = function (config, callback) {
        config.type = _ajaxType[1];
        config.dataType = _ajaxDataType[0];
        config.cache = false;
        config.contentType = false;
        config.processData = false;
        _ajax(config, callback);
    };
    function _ajax(config, callback) {
        $.ajax({
            url: api_host + "/api/" + config.url,
            type: config.type,
            data: config.data,
            dataType: config.dataType,
            timeout: config.timeout,
            async: config.async,
            cache: config.cache,
            contentType: config.contentType,
            processData: config.processData,
            beforeSend: function () {

            },
            success: function (_resultData) {
                // 成功或者强制回掉才执行回掉函数
                if(_resultData.success || config.mustCallback){
                    (callback && typeof(callback) === "function") && callback(_resultData);
                } else{
                    layer.msg(_resultData.message);
                }
            },
            error: function (XMLHttpRequest) {
                var defCallback = config.defCallback;
                if(defCallback){
                    (defCallback && typeof(defCallback) === "function") && defCallback();
                }else{
                    _handleStatus(XMLHttpRequest.status);
                }
            },
            complete: function () {

            }
        });
    }

    function _handleStatus(status) {
        switch (status) {
            case 404:
                layer.msg('请求资源不存在：#' + status);
                break;
            case 400:
                layer.msg('请求参数有误：#' + status);
                break;
            case 500:
                layer.msg('服务器错误：#' + status);
                break;
            case 504:
                layer.msg('链接超时：#' + status);
                break;
            default:
                layer.msg('未知错误：#' + status);
                break;
        }
    }

    window.EasyAjax = EasyAjax;
})(window, jQuery);
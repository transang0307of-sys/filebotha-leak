'sử dụng nghiêm ngặt';

//-[ Yêu cầu cấu hình và sử dụng ]-!/

nếu (global.Fca.Require.FastConfig.Config != 'mặc định') {
    //làm ssth
}

const Ngôn ngữ = global.Fca.Require.languageFile.find((/** @type {{ Ngôn ngữ: chuỗi; }} */i) => i.Language == global.Fca.Require.FastConfig.Language).Folder.Index;

//-[ Yêu cầu tất cả các gói cần sử dụng ]-!/

var utils = global.Fca.Require.utils,
    logger = global.Fca.Require.logger,
    fs = global.Fca.Require.fs,
    getText = global.Fca.getText,
    log = global.Fca.Require.log,
    express = yêu cầu("express")(),
    { tham gia } = yêu cầu ('đường dẫn'),
    cheerio = yêu cầu("cheerio"),
    { readFileSync, writeFileSync } = yêu cầu('fs-extra'),
    Cơ sở dữ liệu = require("./Extra/Database"),
    readline = yêu cầu("readline"),
    phấn = yêu cầu("phấn"),
    figlet = yêu cầu("figlet"),
    os = yêu cầu("os"),
    deasync = yêu cầu('deasync'),
    Bảo mật = yêu cầu("./Bổ sung/Bảo mật/Cơ sở"),
    { getAll, deleteAll } = yêu cầu('./Extra/ExtraGetThread'),
    ws = yêu cầu('ws'),
    Websocket = yêu cầu('./Extra/Src/Websocket'),
    Chuyển đổi = yêu cầu ('ansi-sang-html');

//-[ Đặt biến cho quy trình ]-!/

log.maxRecordSize = 100;
var checkVerified = null;
const Boolean_Option = ['trực tuyến','selfListen','listenEvents','updatePresence','forceLogin','autoMarkDelivery','autoMarkRead','listenTyping','autoReconnect','emitReady'];

//-[ Thiết lập và kiểm tra mẫu HTML ]-!/

const css = readFileSync(join(__dirname, 'Extra', 'Html', 'Classic', 'style.css'));
const js = readFileSync(join(__dirname, 'Extra', 'Html', 'Classic', 'script.js'));

//-[ Chức năng tạo mẫu HTML ]-!/

/**
 * Trả về một chuỗi mã HTML.
 * @param UserName - Tên người dùng của người dùng
 * @param Type - Loại người dùng, có thể là "Miễn phí" hoặc "Cao cấp"
 * @param link - Liên kết đến bản nhạc bạn muốn phát
 * @returns Một tập tin HTML
 */

hàm ClassicHTML(Tên người dùng,Loại,liên kết) {
    trả về `<!DOCTYPE html>
    <html lang="vi" >
        <đầu>
        <meta charset="UTF-8">
        <title>Chân trời</title>
        <liên kết rel="stylesheet" href="./style.css">
    </đầu>
    <thân>
        <giữa>
            <marquee><b>chờ bạn :d</b></marquee>
            <h2>Thông tin người dùng Horizon</h2>
            <h3>Tên người dùng: ${UserName} | Loại: ${Type}</h3>
            <canvas id="myCanvas"></canvas>
            <script src="./script.js"></script>
            <footer class="footer">
                <div id="âm nhạc">
                    <audio autoplay="false" controls="true" loop="true" src="${link}" __idm_id__="5070849">Trình duyệt của bạn không hỗ trợ phần tử âm thanh.</audio>
                    <br><b>ID phiên:</b> ${global.Fca.Require.Security.create().uuid}<br>
                    <br>Cảm ơn bạn đã sử dụng <b>Fca-Horizon-Remastered</b> - Từ <b>Kanzu</b> <3<br>
                </div>
            </chân trang>
            </div>
        </trung tâm>
    </html>
    </thân>`
    //lười thay đổi
}



//-[ Khai báo thông tin Http ]-!/

express.set('DFP', (process.env.PORT || process.env.port || 80));

express.use(hàm(req, res, tiếp theo) {
    chuyển đổi (req.url.split('?')[0]) {
        trường hợp '/script.js': {
            res.writeHead(200, { 'Kiểu nội dung': 'văn bản/javascript' });
                res. write(js);
            phá vỡ;
        }
        trường hợp '/style.css': {
            res.writeHead(200, { 'Kiểu nội dung': 'text/css' });
                res.write(css);
            phá vỡ;
        }
        mặc định: {
            res.writeHead(200, "OK", { "Kiểu nội dung": "text/html" });
            res.write(ClassicHTML(global.Fca.Require.FastConfig.HTML.UserName, "Quyền truy cập cao cấp", global.Fca.Require.FastConfig.HTML.MusicLink));
        }
    }
    res. kết thúc();
})
Máy chủ var;
nếu (global.Fca.Require.FastConfig.HTML.HTML) Máy chủ = express.listen(express.get('DFP'));

/*
hàm escapeHTML(đầu vào) {
    const entityMap = {'&': '&','<': '<','>': '>','"': '"',"'": '\''};
    trả về String(input).replace(/[&<>"'`=\/]/g, hàm(s) {
        trả về entityMap[s];
    });
}
//tránh tiêm html

nếu (global.Fca.Require.FastConfig.Websocket_Extension.Status) {
    var convert = new Chuyển đổi();
    nếu (Máy chủ != không xác định) {
        const WebSocket = new ws.Server({ noServer: true });
        const { Máy khách, WSS } = Websocket.connect(WebSocket);
        Server.on('nâng cấp', (yêu cầu, ổ cắm, đầu) => {
            const escapedReq = escapeHTML(req);
            const escapedSocket = escapeHTML(ổ cắm);
            const escapedHead = escapeHTML(phần đầu);
            WSS.handleUpgrade(escapedReq, escapedSocket, escapedHead, (wss) => {
                const escapedWss = escapeHTML(wss);
                const escapedReq = escapeHTML(req);
        
                escapedWss.emit('kết nối', escapedWss, escapedReq);
            });
        });
        console._log = console.__log
        console.log = hàm(dữ liệu) {
            const Tất cả = Object.keys(Khách hàng)
            console._log.apply(dữ liệu, đối số)
            thử {
                const log = (convert.toHtml(data) || data || "Không có gì để hiển thị")
                console.history.push(nhật ký)
                nếu (console.history.length > 80) {
                    console.history.shift();
                }
                đối với (hãy để i của Tất cả) {
                    nếu (Client[i].Status) {
                        Client[i].Websocket.send(JSON.stringify({ Kiểu: "Console", Dữ liệu: log }));
                    }
                    nếu không thì tiếp tục;
                }
            }
            bắt (e) {
                trở lại;
            }
        }
    }
    khác {
        const WebSocket = new ws.Server({cổng: 80});
        const { Máy khách } = Websocket.connect(WebSocket);
        console._log = console.__log
        console.log = hàm(dữ liệu) {
            const Tất cả = Object.keys(Khách hàng)
            console._log.apply(dữ liệu, đối số)
            thử {
                const log = convert.toHtml(dữ liệu)
                console.history.push(nhật ký)
                nếu (console.history.length > 80) {
                    console.history.shift();
                }
                đối với (hãy để i của Tất cả) {
                    nếu (Client[i].Status) {
                        Client[i].Websocket.send(JSON.stringify({ Kiểu: "Console", Dữ liệu: log }));
                    }
                    nếu không thì tiếp tục;
                }
            }
            bắt (e) {
                trở lại
            }
        }
    }
    
}
**/
//-[ Hàm setOptions ]-!/

/**
 * @param {{ [x: chuỗi]: boolean; selfListen?: boolean; listenEvents?: boolean; listenTyping?: boolean; updatePresence?: boolean; forceLogin?: boolean; autoMarkDelivery?: boolean; autoMarkRead?: boolean; autoReconnect?: boolean; logRecordSize: bất kỳ; trực tuyến?: boolean; emitReady?: boolean; userAgent: bất kỳ; logLevel?: bất kỳ; pageID?: bất kỳ; proxy?: bất kỳ; }} globalOptions
 * @param {{ [x: string]: any; logLevel?: any; forceLogin?: boolean; userAgent?: any; pauseLog?: any; logRecordSize?: any; pageID?: any; proxy?: any; }} tùy chọn
 */

hàm setOptions(globalOptions, options) {
    Đối tượng.keys(tùy chọn).map(hàm(khóa) {
        chuyển đổi (Boolean_Option.includes(key)) {
            trường hợp đúng: {
                globalOptions[key] = Boolean(tùy chọn[key]);
                phá vỡ;
            }
            trường hợp sai: {
                công tắc (phím) {
                    trường hợp 'pauseLog': {
                        nếu (options.pauseLog) log.pause();
                            nếu không thì log.resume();
                        phá vỡ;
                    }
                    trường hợp 'logLevel': {
                        log.level = tùy chọn.logLevel;
                            globalOptions.logLevel = options.logLevel;
                        phá vỡ;
                    }
                    trường hợp 'logRecordSize': {
                        log.maxRecordSize = tùy chọn.logRecordSize;
                            globalOptions.logRecordSize = options.logRecordSize;
                        phá vỡ;
                    }
                    trường hợp 'pageID': {
                        globalOptions.pageID = options.pageID.toString();
                        phá vỡ;
                    }
                    trường hợp 'userAgent': {
                        globalOptions.userAgent = (options.userAgent || 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, giống như Gecko) Chrome/125.0.0.0 Safari/537.36');
                        phá vỡ;
                    }
                    trường hợp 'proxy': {
                        nếu (kiểu tùy chọn.proxy != "chuỗi") {
                            xóa globalOptions.proxy;
                            utils. setProxy();
                        } khác {
                            globalOptions.proxy = options.proxy;
                            utils.setProxy(globalOptions.proxy);
                        }
                        phá vỡ;
                    }
                    mặc định: {
                        log.warn("setOptions", "Tùy chọn không được nhận dạng được cung cấp cho setOptions: " + key);
                        phá vỡ;
                    }
                }
                phá vỡ;
            }
        }
    });
}

//-[ Hàm BuildAPI ]-!/

/**
 * @param {bất kỳ} globalOptions
 * @param {chuỗi} html
 * @param {{ getCookies: (arg0: chuỗi) => bất kỳ[]; }} jar
 */

chức năng buildAPI(globalOptions, html, jar, bypass_region) {
    //kiểm tra tiktik
    biến userID;
    var cookie = jar.getCookies("https://www.facebook.com");
    var maybeUser = cookie.filter(hàm(val) { trả về val.cookieString().split("=")[0] === "c_user"; });
    var mayTiktik = cookie.filter(function(val) { return val.cookieString().split("=")[0] === "i_user"; });

    nếu (có thể là User.length === 0 & có thể là Tiktik.length === 0) {
        nếu (global.Fca.Require.FastConfig.AutoLogin) {
            trả về global.Fca.Require.logger.Warning(global.Fca.Require.Language.Index.AutoLogin, function() {
                global.Fca.Action('Tự động đăng nhập')
            });
        }
        nếu không thì nếu (!global.Fca.Require.FastConfig.AutoLogin) {
            trả về global.Fca.Require.logger.Error(global.Fca.Require.Language.Index.ErrAppState);
        }
    }
    khác {
        nếu (html.indexOf("/checkpoint/block/?next") > -1) log.warn("đăng nhập", Language.CheckPointLevelI);

        nếu (có thể là TikTok[0] && có thể là TikTok[0].cookieString().includes('i_user')) {
            userID = có thểTiktik[0].cookieString().split("=")[1].toString();
    
        }
        nếu không thì userID = maybeUser[0].cookieString().split("=")[1].toString();    
        process.env['UID'] = logger.Normal(getText(Ngôn ngữ.UID,userID), userID);

        thử {
            clearInterval(kiểm tra đã xác minh);
        } bắt (e) {
            console. log(e);
        }

        var clientID = (Math.random() * 2147483648 | 0).toString(16);

        var CHECK_MQTT = {
            oldFBMQTTMatch: html.match(/irisSeqID:"(.+?)",appID:219994525426954,endpoint:"(.+?)"/),
            newFBMQTTMatch: html.match(/{"app_id":"219994525426954","endpoint":"(.+?)","iris_seq_id":"(.+?)"}/),
            legacyFBMQTTMatch: html.match(/(\["MqttWebConfig",\[\],{fbid:")(.+?)(",appID:219994525426954,endpoint:")(.+?)(",pollingEndpoint:")(.+?)(3790])/)
        }

        hãy để Slot = Object.keys(CHECK_MQTT);
        
        var mqttEndpoint,khu vực,irisSeqID;
        Đối tượng.keys(CHECK_MQTT).map(hàm(MQTT) {
            nếu (CHECK_MQTT[MQTT] && !region) {
                chuyển đổi (Slot.indexOf(MQTT)) {
                    trường hợp 0: {
                        irisSeqID = CHECK_MQTT[MQTT][1];
                            mqttEndpoint = KIỂM TRA_MQTT[MQTT][2];
                            vùng = URL mới(mqttEndpoint).searchParams.get("vùng").toUpperCase();
                        trở lại;
                    }
                    trường hợp 1: {
                        irisSeqID = CHECK_MQTT[MQTT][2];
                            mqttEndpoint = CHECK_MQTT[MQTT][1].thay thế(/\\\//g, "/");
                            vùng = URL mới(mqttEndpoint).searchParams.get("vùng").toUpperCase();
                        trở lại;
                    }
                    trường hợp 2: {
                        mqttEndpoint = KIỂM TRA_MQTT[MQTT][4];
                            vùng = URL mới(mqttEndpoint).searchParams.get("vùng").toUpperCase();
                        trở lại;
                    }
                }
            trở lại;
            }
        });   
        biến ctx = {
            userID: userID,
            lọ: lọ,
            clientID: clientID,
            globalOptions: globalOptions,
            đã đăng nhập: đúng,
            access_token: 'KHÔNG CÓ',
            clientMutationId: 0,
            mqttClient: không xác định,
            lastSeqId: irisSeqID,
            syncToken: không xác định,
            mqttĐiểm cuối: mqttĐiểm cuối,
            khu vực: khu vực,
            firstListen: đúng,
            yêu cầu_ID: 0,
            gọi lại_Nhiệm vụ: {}
        };

        api = {
            setOptions: setOptions.bind(null, globalOptions),
            getAppState: hàm getAppState() {
                trả về utils.getAppState(jar);
            }
        };
     
        nếu (khu vực && mqttEndpoint) {
            //làm gì đó
        }
        khác {
            nếu (bỏ qua_khu_vực) {
                logger.Normal(Ngôn ngữ.NoAreaDataBypass);
            }
            khác {
                log.warn("đăng nhập", getText(Language.NoAreaData));
                api["htmlData"] = html;
            }
        }

        var defaultFuncs = utils.makeDefaults(html, userID, ctx);

        fs.readdirSync(__dirname + "/src").filter((/** @type {string} */File) => File.endsWith(".js") && !File.includes('Dev_')).map((/** @type {string} */File) => {
            nếu (Tệp == 'getThreadInfo.js' && global.Fca.Require.FastConfig.AntiGetInfo.AntiGetThreadInfo != true || Tệp == 'getUserInfo.js' && global.Fca.Require.FastConfig.AntiGetInfo.AntiGetUserInfo != true) api[Tệp.split('.').slice(0, -1).join('.')] = require('./src/' + (Tệp.includes('getThreadInfo') ? 'getThreadMain.js' : 'getUserInfoMain.js'))(defaultFuncs, api, ctx)
            nếu không thì api[File.split('.').slice(0, -1).join('.')] = require('./src/' + File)(defaultFuncs, api, ctx)
        });

        trở lại {
            ctx,
            Hàm mặc định,
            api
        };
    }
}

//-[ Hàm makeLogin ]-!/

/**
 * @param {{ setCookie: (arg0: bất kỳ, arg1: chuỗi) => void; }} jar
 * @param {bất kỳ} email nào
 * @param {bất kỳ} mật khẩu
 * @param {{ forceLogin: bất kỳ; }} loginOptions
 * @param {(err: bất kỳ, api: bất kỳ) => bất kỳ} gọi lại
 * @param {bất kỳ} prCallback
 */

hàm makeLogin(jar, email, mật khẩu, loginOptions, callback, prCallback) {
    hàm trả về(res) {
        var html = res.body,$ = cổ vũ.load(html),arr = [];

        $("#login_form input").map((i, v) => arr.push({ giá trị: $(v).val(), tên: $(v).attr("tên") }));

        arr = arr.filter(hàm(v) {
            trả về v.val && v.val.length;
        });
        var form = utils.arrToForm(arr);
            form.lsd = utils.getFrom(html, "[\"LSD\",[],{\"token\":\"", "\"}");
            form.lgndim = Buffer.from("{\"w\":1440,\"h\":900,\"aw\":1440,\"ah\":834,\"c\":24}").toString('base64');
            form.email = email;
            form.pass = mật khẩu;
            form.default_persistent = '0';
            form.locale = 'en_US';     
            form.múi giờ = '240';
            form.lgnjs = ~~(Ngày.hiện tại() / 1000);

        html.split("\"_js_").slice(1).map((val) => {
            jar.setCookie(utils.formatCookie(JSON.parse("[\"" + utils.getFrom(val, "", "]") + "]"), "facebook"),"https://www.facebook.com")
        });

        logger.Normal(Ngôn ngữ.Khi đăng nhập);
        trả lại tiện ích
            .post("https://www.facebook.com/login/device-based/regular/login/?login_attempt=1&lwv=110", jar, biểu mẫu, loginOptions)
            .sau đó(utils.saveCookies(jar))
            .then(hàm(/** @type {{ tiêu đề: bất kỳ; }} */res) {
                var headers = res.headers;  
                nếu (!headers.location) ném { lỗi: Language.InvaildAccount };

                // Điều này có nghĩa là tài khoản đã được bật phê duyệt đăng nhập.
                nếu (headers.location.indexOf('https://www.facebook.com/checkpoint/') > -1) {
                    logger.Cảnh báo(Ngôn ngữ.HaiAuth);
                    var nextURL = 'https://www.facebook.com/checkpoint/?next=https%3A%2F%2Fwww.facebook.com%2Fhome.php';

                    trả lại tiện ích
                        .get(headers.location, jar, null, loginOptions)
                        .sau đó(utils.saveCookies(jar))
                        .sau đó(hàm(res) {
                            nếu (!Database().get('ThroughAcc')) {
                                Database().set('ThroughAcc', email);
                            }
                            khác {
                                nếu (String((Database().get('ThroughAcc'))).replace(RegExp('"','g'), '') != String(email).replace(RegExp('"','g'), '')) {
                                    Database().set('ThroughAcc', email);
                                    nếu (Database().get('Through2Fa')) {
                                        Cơ sở dữ liệu().delete('Through2Fa');
                                    }
                                }
                            }
                            var html = res.body,$ = cổ vũ.load(html), arr = [];
                            $("form input").map((i, v) => arr.push({ val: $(v).val(), name: $(v).attr("name") }));
                            arr = arr.filter(v => { trả về v.val && v.val.length });
                            var form = utils.arrToForm(arr);
                            nếu (html.indexOf("checkpoint/?next") > -1) {
                                thiết lập thời gian chờ(() => {
                                    kiểm traĐã xác minh = setInterval((_form) => {}, 5000, {
                                        fb_dtsg: biểu mẫu.fb_dtsg,
                                        jazoest: form.jazoest,
                                        dpr: 1
                                    });
                                }, 2500);  
                                chuyển đổi (global.Fca.Require.FastConfig.Login2Fa) {
                                    trường hợp đúng: {
                                        const question = câu hỏi => {
                                            const rl = readline.createInterface({
                                                đầu vào: process.stdin,
                                                đầu ra: process.stdout
                                            });
                                            var xong, trả lời;
                                                rl.question(câu hỏi, câu trả lời => {
                                                    rl. đóng();
                                                    answ = câu trả lời;
                                                    xong = đúng
                                                })
                                                deasync.loopWhile(hàm(){
                                                    trả về !xong;
                                                });
                                            trả lời lại;
                                        };
                                        thử {
                                            const Old_Cookie = Database().get('Through2Fa');
                                                nếu (Old_Cookie) {
                                                    Old_Cookie.map(function(/** @type {{ key: chuỗi; value: chuỗi; expires: chuỗi; domain: chuỗi; path: chuỗi; }} */c) {
                                                        hãy để str = c.key + "=" + c.value + "; hết hạn=" + c.expires + "; tên miền=" + c.domain + "; đường dẫn=" + c.path + ";";
                                                        jar.setCookie(chuỗi, "http://" + c.tên miền);
                                                    });
                                                    hãy để Form = utils.arrToForm(arr);
                                                        Form.lsd = utils.getFrom(html, "[\"LSD\",[],{\"token\":\"", "\"}");
                                                        Form.lgndim = Buffer.from("{\"w\":1440,\"h\":900,\"aw\":1440,\"ah\":834,\"c\":24}").toString('base64');
                                                        Form.email = email;
                                                        Form.pass = mật khẩu;
                                                        Form.default_persistent = '0';
                                                        Form.locale = 'en_US';
                                                        Biểu mẫu. múi giờ = '240';
                                                        Form.lgnjs = ~~(Ngày.hiện tại() / 1000);
                                                    trả lại tiện ích
                                                        .post("https://www.facebook.com/login/device-based/regular/login/?login_attempt=1&lwv=110", jar, Biểu mẫu, loginOptions)
                                                        .sau đó(utils.saveCookies(jar))
                                                    .sau đó(hàm(res) {
                                                            hãy để headers = res.headers
                                                                nếu (!headers['set-cookie'][0].includes('deleted')) {
                                                                    logger.Cảnh báo(Ngôn ngữ.ErrThroughCookies, hàm() {
                                                                        Cơ sở dữ liệu().delete('Through2Fa');
                                                                    });
                                                                    tiến trình.thoát(1);
                                                                }
                                                            nếu (headers.location && headers.location.indexOf('https://www.facebook.com/checkpoint/') > -1) {
                                                                trả lại tiện ích
                                                                    .get(headers.location, jar, null, loginOptions)
                                                                    .sau đó(utils.saveCookies(jar))
                                                                .sau đó(hàm(res) {
                                                                    var html = res.body,$ = cổ vũ.load(html), arr = [];
                                                                    $("form input").map((i, v) => arr.push({ val: $(v).val(), name: $(v).attr("name") }));
                                                                    arr = arr.filter(v => { trả về v.val && v.val.length });
                                                                    var Form = utils.arrToForm(arr);

                                                                    nếu (html.indexOf("checkpoint/?next") > -1) {
                                                                        thiết lập thời gian chờ(() => {
                                                                            kiểm traĐã xác minh = setInterval((_form) => {}, 5000, {
                                                                                fb_dtsg: Biểu mẫu.fb_dtsg,
                                                                                jazoest: Form.jazoest,
                                                                                dpr: 1
                                                                            });
                                                                        }, 2500);

                                                                        nếu (!res.headers.location && res.headers['set-cookie'][0].includes('checkpoint')) {
                                                                            thử {
                                                                                xóa Form.name_action_selected;
                                                                                Form['submit[Tiếp tục]'] = $("#checkpointSubmitButton").html();
                                                                                trả lại tiện ích
                                                                                    .post(nextURL, jar, Form, loginOptions)
                                                                                    .sau đó(utils.saveCookies(jar))
                                                                                    .sau đó(hàm() {
                                                                                        Form['submit[Đây là tôi]'] = "Đây là tôi";
                                                                                        trả về utils.post(nextURL, jar, Form, loginOptions).then(utils.saveCookies(jar));
                                                                                    })
                                                                                    .sau đó(hàm() {
                                                                                        xóa Form['gửi[Đây là tôi]'];
                                                                                        Form.name_action_selected = 'lưu_thiết_bị';
                                                                                        Form['submit[Tiếp tục]'] = $("#checkpointSubmitButton").html();
                                                                                        trả về utils.post(nextURL, jar, Form, loginOptions).then(utils.saveCookies(jar));
                                                                                    })
                                                                                    .sau đó(hàm(res) {
                                                                                        var headers = res.headers;
                                                                                        nếu (!headers.location && res.headers['set-cookie'][0].includes('checkpoint')) {
                                                                                            Cơ sở dữ liệu().delete('Through2Fa');
                                                                                            tiến trình.thoát(1);
                                                                                        }
                                                                                        var appState = utils.getAppState(jar,false);
                                                                                        Cơ sở dữ liệu().set('Through2Fa', appState);
                                                                                        trả về loginHelper(appState, email, mật khẩu, loginOptions, callback);
                                                                                    })
                                                                                .catch((e) => gọi lại(e));
                                                                            }
                                                                            bắt (e) {
                                                                                console.log(e)
                                                                            }
                                                                        }
                                                                    }
                                                                })
                                                            }
                                                        trả về utils.get('https://www.facebook.com/', jar, null, loginOptions).then(utils.saveCookies(jar));
                                                    })
                                                    .catch(e) => console.log(e));
                                                }
                                            }
                                        bắt (e) {
                                            Cơ sở dữ liệu().delete('Through2Fa');
                                        }
                                        const Otp_code = yêu cầu('totp-generator');
                                        const Mã = global.Fca.Require.FastConfig.AuthString.includes('|') == false ? Otp_code(global.Fca.Require.FastConfig.AuthString.includes(" ") ? global.Fca.Require.FastConfig.AuthString.replace(RegExp(" ", 'g'), "") : global.Fca.Require.FastConfig.AuthString) : question(Ngôn ngữ.EnterSecurityCode);
                                            thử {
                                                const chấp thuận = hàm(N_Code) {
                                                    form.approvals_code = Mã_N;
                                                    form['submit[Tiếp tục]'] = $("#checkpointSubmitButton").html();
                                                    var prResolve,prReject;
                                                    var rtPromise = new Promise((giải quyết, từ chối) => { prResolve = giải quyết; prReject = từ chối; });

                                                    nếu (kiểu N_Code == "chuỗi") {
                                                        tiện ích
                                                            .post(nextURL, jar, form, loginOptions)
                                                            .sau đó(utils.saveCookies(jar))
                                                        .sau đó(hàm(res) {
                                                            var $ = cổ vũ.load(res.body);
                                                            var lỗi = $("#approvals_code").parent().attr("data-xui-error");
                                                            nếu (lỗi) {
                                                                logger.Warning(Language.InvaildTwoAuthCode,function() { approvals(question(Language.EnterSecurityCode)) }); //vòng lặp bruh
                                                            };
                                                        })
                                                        .sau đó(hàm() {
                                                            xóa form.no_fido; xóa form.approvals_code;
                                                            form.name_action_selected = 'lưu_thiết_bị'; //'lưu_thiết_bị' || 'không_lưu;
                                                            trả về utils.post(nextURL, jar, form, loginOptions).then(utils.saveCookies(jar));
                                                        })
                                                        .sau đó(hàm(res) {
                                                            var headers = res.headers;
                                                            nếu (!headers.location && res.headers['set-cookie'][0].includes('checkpoint')) {
                                                                thử {
                                                                    xóa form.name_action_selected;
                                                                    form['submit[Tiếp tục]'] = $("#checkpointSubmitButton").html();
                                                                    trả lại tiện ích
                                                                        .post(nextURL, jar, form, loginOptions)
                                                                        .sau đó(utils.saveCookies(jar))
                                                                        .sau đó(hàm() {
                                                                            form['submit[Đây là tôi]'] = "Đây là tôi";
                                                                            trả về utils.post(nextURL, jar, form, loginOptions).then(utils.saveCookies(jar));
                                                                        })
                                                                        .sau đó(hàm() {
                                                                            xóa biểu mẫu['gửi[Đây là tôi]'];
                                                                            form.name_action_selected = 'lưu_thiết_bị';
                                                                            form['submit[Tiếp tục]'] = $("#checkpointSubmitButton").html();
                                                                            trả về utils.post(nextURL, jar, form, loginOptions).then(utils.saveCookies(jar));
                                                                        })
                                                                        .sau đó(hàm(res) {
                                                                            var headers = res.headers;
                                                                            nếu (!headers.location && res.headers['set-cookie'][0].includes('checkpoint')) ném { lỗi: "wtf ??:D" };
                                                                            var appState = utils.getAppState(jar,false);
                                                                            Cơ sở dữ liệu().set('Through2Fa', appState);
                                                                            trả về loginHelper(appState, email, mật khẩu, loginOptions, callback);
                                                                        })
                                                                    .catch((e) => gọi lại(e));
                                                                }
                                                                bắt (e) {
                                                                    console.log(e)
                                                                }
                                                            }
                                                            var appState = utils.getAppState(jar,false);
                                                            nếu (gọi lại === prCallback) {
                                                                gọi lại = hàm(err, api) {
                                                                    nếu (err) trả về prReject(err);
                                                                    trả về prResolve(api);
                                                                };
                                                            }
                                                            Cơ sở dữ liệu().set('Through2Fa', appState);
                                                            trả về loginHelper(appState, email, mật khẩu, loginOptions, callback);
                                                        })
                                                        .catch(hàm(lỗi) {
                                                                nếu (gọi lại === prCallback) prReject(err);
                                                                nếu không thì gọi lại(err);
                                                        });
                                                    }
                                                    khác {
                                                        tiện ích
                                                            .post("https://www.facebook.com/checkpoint/?next=https%3A%2F%2Fwww.facebook.com%2Fhome.php", jar, form, loginOptions, null, { "Người giới thiệu": "https://www.facebook.com/checkpoint/?next" })
                                                            .sau đó(utils.saveCookies(jar))
                                                        .sau đó(hàm(res) {
                                                            thử {
                                                                JSON.parse(res.body.replace(/for\s*\(\s*;\s*;\s*\)\s*;\s*/, ""));
                                                            } bắt (ví dụ) {
                                                                clearInterval(kiểm tra đã xác minh);
                                                                logger.Cảnh báo(Ngôn ngữ.Đã xác minh);
                                                                nếu (gọi lại === prCallback) {
                                                                    gọi lại = hàm(err, api) {
                                                                        nếu (err) trả về prReject(err);
                                                                        trả về prResolve(api);
                                                                    };
                                                                }
                                                                hãy để appState = utils.getAppState(jar,false);
                                                                trả về loginHelper(appState, email, mật khẩu, loginOptions, callback);
                                                            }
                                                        })
                                                        .catch((ví dụ) => {
                                                            log.error("đăng nhập", ví dụ);
                                                            nếu (gọi lại === prCallback) prReject(ex);
                                                            else gọi lại(ex);
                                                        });
                                                    }
                                                    trả về rtPromise;
                                                }
                                                trả lại phê duyệt (Mã)
                                            }
                                            bắt (e) {
                                                logger.Lỗi(e)
                                                logger. Lỗi();
                                                tiến trình.thoát(0);
                                            }
                                        }
                                    trường hợp sai: {
                                        ném {
                                            lỗi: 'đăng nhập-phê duyệt',
                                            tiếp tục: hàm submit2FA(code) {
                                                form.approvals_code = mã;
                                                form['submit[Tiếp tục]'] = $("#checkpointSubmitButton").html(); //'Tiếp tục';
                                                var prResolve,prReject;
                                                var rtPromise = new Promise((giải quyết, từ chối) => { prResolve = giải quyết; prReject = từ chối; });
                                                nếu (kiểu mã == "chuỗi") {
                                                    tiện ích
                                                        .post(nextURL, jar, form, loginOptions)
                                                        .sau đó(utils.saveCookies(jar))
                                                        .then(hàm(/** @type {{ body: chuỗi | Bộ đệm; }} */res) {
                                                            var $ = cổ vũ.load(res.body);
                                                            var lỗi = $("#approvals_code").parent().attr("data-xui-error");
                                                            nếu (lỗi) {
                                                                ném {
                                                                    lỗi: 'đăng nhập-phê duyệt',
                                                                    errordesc: Ngôn ngữ.InvaildTwoAuthCode,
                                                                    lerror: lỗi,
                                                                    tiếp tục: submit2FA
                                                                };
                                                            }
                                                        })
                                                        .sau đó(hàm() {
                                                            xóa form.no_fido; xóa form.approvals_code;
                                                            form.name_action_selected = 'không_lưu'; //'lưu_thiết_bị' || 'không_lưu;
                                                            trả về utils.post(nextURL, jar, form, loginOptions).then(utils.saveCookies(jar));
                                                        })
                                                        .sau đó(hàm(res) {
                                                            var headers = res.headers;
                                                            nếu (!headers.location && res.headers['set-cookie'][0].includes('checkpoint')) ném { lỗi: Language.ApprovalsErr };
                                                            var appState = utils.getAppState(jar,false);
                                                            nếu (gọi lại === prCallback) {
                                                                gọi lại = hàm(err, api) {
                                                                    nếu (err) trả về prReject(err);
                                                                    trả về prResolve(api);
                                                                };
                                                            }
                                                            trả về loginHelper(appState, email, mật khẩu, loginOptions, callback);
                                                        })
                                                        .catch(hàm(lỗi) {
                                                            nếu (gọi lại === prCallback) prReject(err);
                                                            nếu không thì gọi lại(err);
                                                        });
                                                } khác {
                                                    tiện ích
                                                        .post("https://www.facebook.com/checkpoint/?next=https%3A%2F%2Fwww.facebook.com%2Fhome.php", jar, form, loginOptions, null, { "Người giới thiệu": "https://www.facebook.com/checkpoint/?next" })
                                                        .sau đó(utils.saveCookies(jar))
                                                        .sau đó((res) => {
                                                            thử {
                                                                JSON.parse(res.body.replace(/for\s*\(\s*;\s*;\s*\)\s*;\s*/, ""));
                                                            } bắt (ví dụ) {
                                                                clearInterval(kiểm tra đã xác minh);
                                                                logger.Cảnh báo(Ngôn ngữ.Đã xác minh);
                                                                nếu (gọi lại === prCallback) {
                                                                    gọi lại = hàm(err, api) {
                                                                        nếu (err) trả về prReject(err);
                                                                        trả về prResolve(api);
                                                                    };
                                                                }
                                                                trả về loginHelper(utils.getAppState(jar,false), email, mật khẩu, loginOptions, callback);
                                                            }
                                                        })
                                                        .catch((ví dụ) => {
                                                            log.error("đăng nhập", ví dụ);
                                                            nếu (gọi lại === prCallback) prReject(ex);
                                                            else gọi lại(ex);
                                                        });
                                                    }
                                                trả về rtPromise;
                                            }
                                        };
                                    }
                                }
                            } khác {
                                nếu (!loginOptions.forceLogin) ném { lỗi: Language.ForceLoginNotEnable };

                                nếu (html.indexOf("Cố gắng đăng nhập đáng ngờ") > -1) form['submit[Đây là tôi]'] = "Đây là tôi";
                                else form['submit[Điều này ổn]'] = "Điều này ổn";

                                trả lại tiện ích
                                    .post(nextURL, jar, form, loginOptions)
                                    .sau đó(utils.saveCookies(jar))
                                    .sau đó(hàm() {
                                        form.name_action_selected = 'không_lưu';

                                        trả về utils.post(nextURL, jar, form, loginOptions).then(utils.saveCookies(jar));
                                    })
                                    .sau đó(hàm(res) {
                                        var headers = res.headers;

                                        if (!headers.location && res.body.indexOf('Xem lại lần đăng nhập gần đây') > -1) throw { lỗi: "Đã xảy ra lỗi khi xem lại lần đăng nhập gần đây." };

                                        var appState = utils.getAppState(jar,false);

                                        trả về loginHelper(appState, email, mật khẩu, loginOptions, callback);
                                    })
                                    .catch((e) => gọi lại(e));
                            }
                        });
                }
            trả về utils.get('https://www.facebook.com/', jar, null, loginOptions).then(utils.saveCookies(jar));
        });
    };
}

//-[ Chức năng sao lưu ]-!/

/**
 * @param {string} dữ liệu
 * @param {bất kỳ} globalOptions
 * @param {bất kỳ} gọi lại
 * @param {bất kỳ} prCallback
 */

chức năng sao lưu (dữ liệu, globalOptions, gọi lại, prCallback) {
    thử {
        var appstate;
        thử {
            appstate = JSON.parse(dữ liệu)
        }
        bắt(e) {
            appstate = dữ liệu;
        }
            logger.Warning(Ngôn ngữ.BackupNoti);
        thử {
            loginHelper(appstate,null,null,globalOptions, gọi lại, prCallback)
        }
        bắt (e) {
            logger.Error(Ngôn ngữ.ErrBackup);
            tiến trình.thoát(0);
        }
    }
    bắt (e) {
        trả về logger.Error();
    }
}

//-[ hàm loginHelper ]-!/

/**
 * @param {chuỗi | bất kỳ[]} appState
 * @param {bất kỳ} email nào
 * @param {bất kỳ} mật khẩu
 * @param {{ selfListen?: boolean; listenEvents?: boolean; listenTyping?: boolean; updatePresence?: boolean; forceLogin?: boolean; autoMarkDelivery?: boolean; autoMarkRead?: boolean; autoReconnect?: boolean; logRecordSize?: number; online?: boolean; emitReady?: boolean; userAgent?: string; pageID?: any; }} globalOptions
 * @param {(arg0: bất kỳ, arg1: không xác định) => void} gọi lại
 * @param {(lỗi: bất kỳ, api: bất kỳ) => bất kỳ} [prCallback]
 */

chức năng loginHelper(appState, email, mật khẩu, globalOptions, gọi lại, prCallback) {
    var mainPromise = null;
    var jar = utils.getJar();

thử {
    nếu (appState) {
        logger.Normal(Ngôn ngữ.OnProcess);
            chuyển đổi (Cơ sở dữ liệu().có("FBKEY")) {
                trường hợp đúng: {
                    process.env.FBKEY = Cơ sở dữ liệu().get("FBKEY");
                }
                    phá vỡ;
                trường hợp sai: {
                    const SecurityKey = global.Fca.Require.Security.create().apiKey;
                        process.env['FBKEY'] = Khóa bảo mật;
                    Cơ sở dữ liệu().set('FBKEY', SecurityKey);
                }
                    phá vỡ;
                mặc định: {
                    const SecurityKey = global.Fca.Require.Security.create().apiKey;
                        process.env['FBKEY'] = Khóa bảo mật;
                    Cơ sở dữ liệu().set('FBKEY', SecurityKey);
                }
            }
            thử {
                chuyển đổi (global.Fca.Require.FastConfig.EncryptFeature) {
                    trường hợp đúng: {
                        appState = JSON.parse(JSON.stringify(appState, null, "\t"));
                        chuyển đổi (utils.getType(appState)) {
                            trường hợp "Mảng": {
                                chuyển đổi (utils.getType(appState[0])) {
                                    trường hợp "Đối tượng": {
                                        logger.Normal(Ngôn ngữ.Không sẵn sàng để giải mã);
                                    }
                                        phá vỡ;
                                    trường hợp "Chuỗi": {
                                        appState = Security(appState,process.env['FBKEY'],'Giải mã');
                                        logger.Normal(Ngôn ngữ.Giải mã thành công);
                                    }
                                        phá vỡ;
                                    mặc định: {
                                        logger.Cảnh báo(Ngôn ngữ.InvaildAppState);
                                        tiến trình.thoát(0)
                                    }
                                }
                            }
                                phá vỡ;
                            mặc định: {
                                logger.Cảnh báo(Ngôn ngữ.InvaildAppState);
                                tiến trình.thoát(0)
                            }
                        }
                    }
                        phá vỡ;
                    trường hợp sai: {
                        chuyển đổi (utils.getType(appState)) {
                            trường hợp "Mảng": {
                                chuyển đổi (utils.getType(appState[0])) {
                                    trường hợp "Đối tượng": {
                                        logger.Normal(Ngôn ngữ.EncryptStateOff);
                                    }
                                        phá vỡ;
                                    trường hợp "Chuỗi": {
                                        appState = Security(appState,process.env['FBKEY'],'Giải mã');
                                        logger.Normal(Ngôn ngữ.EncryptStateOff);
                                        logger.Normal(Ngôn ngữ.Giải mã thành công);
                                    }
                                        phá vỡ;
                                    mặc định: {
                                        logger.Cảnh báo(Ngôn ngữ.InvaildAppState);
                                        tiến trình.thoát(0)
                                    }
                                }
                            }
                                phá vỡ;
                            mặc định: {
                                logger.Cảnh báo(Ngôn ngữ.InvaildAppState);
                                tiến trình.thoát(0)
                            }
                        }
                    }
                        phá vỡ;
                    mặc định: {
                        logger.Warning(getText(Ngôn ngữ.IsNotABoolean,toàn cục.Fca.Require.FastConfig.EncryptFeature))
                        tiến trình.thoát(0);
                    }
                }
            }
            bắt (e) {
                console. log(e);
            }

        thử {
            appState = JSON.parse(appState);
        }
        bắt (e) {
            thử {
                ứng dụngState = ứng dụngState;
            }
            bắt (e) {
                trả về logger.Error();
            }
        }
        thử {
            global.Fca.Data.AppState = appState;
                appState.map(function(/** @type {{ key: chuỗi; value: chuỗi; expires: chuỗi; domain: chuỗi; path: chuỗi; }} */c) {
                    var str = c.key + "=" + c.value + "; hết hạn=" + c.expires + "; tên miền=" + c.domain + "; đường dẫn=" + c.path + ";";
                    jar.setCookie(chuỗi, "http://" + c.tên miền);
                });
                Database().set('Sao lưu', appState);
            mainPromise = utils.get('https://www.facebook.com/', jar, null, globalOptions, { noRef: true }).then(utils.saveCookies(jar));
        }
        bắt (e) {
            thử {
                nếu (Cơ sở dữ liệu().có('Sao lưu')) {
                    trả về sao lưu (Cơ sở dữ liệu (). lấy ('Sao lưu'), globalOptions, gọi lại, prCallback);
                }
                khác {
                    logger.Cảnh báo(Ngôn ngữ.ErrBackup);
                    tiến trình.thoát(0);
                }
            }
            bắt (e) {
                logger.Cảnh báo(Ngôn ngữ.ErrBackup);
                tiến trình.thoát(0);
            }
        }
    }   

    khác {
    mainPromise = tiện ích
        .get("https://www.facebook.com/", null, null, globalOptions, { noRef: đúng })
            .sau đó(utils.saveCookies(jar))
            .then(makeLogin(jar, email, mật khẩu, globalOptions, gọi lại, prCallback))
            .sau đó(hàm() {
                trả về utils.get('https://www.facebook.com/', jar, null, globalOptions).then(utils.saveCookies(jar));
            });
        }
    } bắt (e) {
        console. log(e);
    }

    chức năng CheckAndFixErr(res) {
        hãy để reg_antierr = /Trình duyệt này không được hỗ trợ/gs; // =))))))
        nếu (reg_antierr.test(res.body)) {
            const Dữ liệu = JSON.stringify(res.body);
            const Dt_Check = Data.split('2Fhome.php&gfid=')[1];
            nếu (Dt_Check == không xác định) trả về res
            const fid = Dt_Check.split("\\\\")[0];//sửa sau
            nếu (Dt_Check == không xác định || Dt_Check == "") trả về res
            const final_fid = fid.split(`\\`)[0];
            nếu (final_fid == không xác định || final_fid == '') trả về res;
            const redirectlink = chuyển hướng[1] + "a/preferences.php?basic_site_devices=m_basic&uri=" + encodeURIComponent("https://m.facebook.com/home.php") + "&gfid=" + final_fid;
            bypass_region_err = đúng;
            trả về utils.get(redirectlink, jar, null, globalOptions).then(utils.saveCookies(jar));
        }
        nếu không thì trả về res
    }

    chức năng Redirect(res) {
        var reg = /<meta http-equiv="refresh" content="0;url=([^"]+)[^>]+>/;
        chuyển hướng = reg.exec(res.body);
            nếu (chuyển hướng && chuyển hướng[1]) trả về utils.get(chuyển hướng[1], jar, null, globalOptions).then(utils.saveCookies(jar));
        trả về res;
    }

    hãy chuyển hướng = [1, "https://m.facebook.com/"];
    hãy bỏ qua_khu_vực_err = false;
        var ctx,api;
            mainPromise = lời hứa chính
                .then(res => Chuyển hướng(res))
                .sau đó(res => Kiểm tra và sửa lỗi(res))
               
                //sửa lỗi thông qua đăng nhập bằng UA mặc định trả về WWW.facebook.com không phải m.facebook.com

                .sau đó(hàm(res) {
                    let Regex_Via = /MPageLoadClientMetrics/gs; //mặc định cho tài khoản bình thường, có thể dễ dàng lấy vùng, nếu không có điều này, bạn không thể lấy vùng trong một số trường hợp nhưng bạn có thể chạy bình thường
                    nếu (!Regex_Via.test(res.body)) {
                        //www.facebook.com
                        globalOptions.userAgent = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 giống Mac OS X) AppleWebKit/605.1.15 (KHTML, giống Gecko) Phiên bản/16.6 Mobile/15E148 Safari/604.1";
                        trả về utils.get('https://www.facebook.com/', jar, null, globalOptions, { noRef: true }).then(utils.saveCookies(jar));
                    }
                    nếu không thì trả về res
                })
                .then(res => Chuyển hướng(res))
                .sau đó(res => Kiểm tra và sửa lỗi(res))
                // .then(hàm(res) {
                // hãy để reg_old_web = /Chuyển đổi trang web mặc định/gs;
                // nếu (reg_old_web.test(res.body)) {
                // hãy để Data_Resp = JSON.stringify(res.body);
                // liên kết const = Data_Resp.split('cài đặt/trang web')[1].split("\"")[0].replace('\\', '')
                // const redirect_link2 = redirect[1] + "cài đặt/trang web" + utils.cleanHTML(liên kết)
                // console.log(liên_kết_chuyển_hướng2)
                // trả về utils.get("https://www.facebook.com/", jar, null, globalOptions).then(utils.saveCookies(jar)); // thử ag
                // }
                // nếu không thì trả về res;
                // })
                // .then(hàm(res) {
                // var reg = /<meta http-equiv="refresh" content="0;url=([^"]+)[^>]+>/;
                // chuyển hướng = reg.exec(res.body);
                // nếu (chuyển hướng && chuyển hướng[1]) trả về utils.get(chuyển hướng[1], jar, null, globalOptions).then(utils.saveCookies(jar));
                // trả về res;
                // })
                .sau đó(hàm(res){
                    var html = res.body, Obj = buildAPI(globalOptions, html, jar,bypass_region_err);
                        ctx = Đối tượng.ctx;
                        api = Đối tượng.api;
                    trả về res;
                });
            nếu (globalOptions.pageID) {
                mainPromise = lời hứa chính
                    .sau đó(hàm() {
                        trả về utils.get('https://www.facebook.com/' + ctx.globalOptions.pageID + '/messages/?section=messages&subsection=inbox', ctx.jar, null, globalOptions);
                    })
                    .sau đó(hàm(resData) {
                        var url = utils.getFrom(resData.body, 'window.location.replace("https:\\/\\/www.facebook.com\\', '");').split('\\').join('');
                        url = url. chuỗi con (0, độ dài url - 1);
                        trả về utils.get('https://www.facebook.com' + url, ctx.jar, null, globalOptions);
                    });
            }
        mainPromise
            .sau đó(async() => {
                logger.Normal(getText(Ngôn ngữ.Phiên bản cục bộ,Phiên bản Fca.toàn cầu));
                    logger. Bình thường(getText(Ngôn ngữ.Đếm thời gian,toàn cục.Fca.Dữ liệu.Đếm thời gian()))   
                        logger.Normal(Ngôn ngữ.WishMessage[Math.floor(Math.random()*Ngôn ngữ.WishMessage.length)]);
                    yêu cầu('./Extra/ExtraUptimeRobot')();
                gọi lại(null, api);
            }).catch(hàm(/** @type {{ lỗi: bất kỳ; }} */e) {
            log.error("đăng nhập", e.error || e);
        gọi lại(e);
    });
}

/**
 * Yêu cầu người dùng nhập tài khoản và mật khẩu, sau đó lưu thông tin này vào cơ sở dữ liệu.
 */

hàm setUserNameAndPassWord() {
    hãy để rl = readline.createInterface({
        đầu vào: process.stdin,
        đầu ra: process.stdout
    });

    console. xóa();
    console.log(figlet.textSync('Horizon', {font: 'ANSI Shadow',horizontalLayout: 'mặc định',verticalLayout: 'mặc định',width: 0,whitespaceBreak: true }));
    console.log(chalk.bold.hex('#9900FF')("[</>]") + chalk.bold.yellow(' => ') + "Hệ điều hành: " + chalk.bold.red(os.type()));
    console.log(chalk.bold.hex('#9900FF')("[</>]") + chalk.bold.yellow(' => ') + "Phiên bản máy: " + chalk.bold.red(os.version()));
    console.log(chalk.bold.hex('#9900FF')("[</>]") + chalk.bold.yellow(' => ') + "Phiên bản Fca: " + chalk.bold.red(global.Fca.Version) + '\n');
    thử {
        rl.question(Ngôn ngữ.LoạiTài khoản, (Tài khoản) => {
            nếu (!Account.includes("@") && global.Fca.Require.utils.getType(parseInt(Account)) != "Number") trả về logger.Normal(Language.TypeAccountError, function () { process.exit(1) }); //Rất con người
                nếu không thì rl.question(Language.TypePassword, function (Password) {
                    rl. đóng();
                    thử {
                        Database().set("Tài khoản", Tài khoản);
                        Database().set("Mật khẩu", Mật khẩu);
                    }
                    bắt (e) {
                        logger.Cảnh báo(Ngôn ngữ.ErrDataBase);
                            logger. Lỗi();
                        tiến trình.thoát(0);
                    }
                    nếu (global.Fca.Require.FastConfig.ResetDataLogin) {
                        global.Fca.Require.FastConfig.ResetDataLogin = false;
                        global.Fca.Require.fs.writeFileSync(process.cwd() + '/FastConfigFca.json', JSON.stringify(global.Fca.Require.FastConfig, null, 4));
                    }
                logger.Success(Ngôn ngữ.SuccessSetData);
                tiến trình.thoát(1);
            });
        })
    }
    bắt (e) {
        logger.Lỗi(e)
    }
}

/**
 * @param {{ email: bất kỳ; mật khẩu: bất kỳ; appState: bất kỳ; }} loginData
 * @param {{}} tùy chọn
 * @param {(lỗi: bất kỳ, api: bất kỳ) => bất kỳ} gọi lại
 */

chức năng đăng nhập (loginData, tùy chọn, gọi lại) {
    nếu (utils.getType(tùy chọn) === 'Hàm' || utils.getType(tùy chọn) === 'Hàm không đồng bộ') {
        gọi lại = tùy chọn;
        tùy chọn = {};
    }

    var globalOptions = {
        selfListen: sai,
        listenEvents: đúng,
        listenTyping: sai,
        updatePresence: sai,
        forceLogin: sai,
        autoMarkDelivery: sai,
        autoMarkRead: sai,
        autoReconnect: đúng,
        Kích thước bản ghi: 100,
        trực tuyến: sai,
        phát Sẵn sàng: sai,
        userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/603.3.8 (KHTML, giống như Gecko) Phiên bản/10.1.2 Safari/603.3.8"
    };
    
    var prCallback = null;
    nếu (utils.getType(callback) !== "Hàm" && utils.getType(callback) !== "Hàm không đồng bộ") {
        var rejectFunc = null;
        var resolveFunc = null;
        var returnPromise = new Promise(function(giải quyết, từ chối) {
            resolveFunc = giải quyết;
            rejectFunc = từ chối;
        });
        prCallback = hàm(lỗi, api) {
            nếu (lỗi) trả về rejectFunc(lỗi);
            trả về resolveFunc(api);
        };
        gọi lại = prCallback;
    }

    nếu (loginData.email && loginData.password) {
        đặtTùy chọn(tùy chọn toàn cục, {
            logLevel: "im lặng",
            forceLogin: đúng,
            userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, giống như Gecko) Chrome/103.0.5060.114 Safari/537.36"
        });
        loginHelper(loginData.appState, loginData.email, loginData.password, globalOptions, callback, prCallback);
    }
    nếu không thì nếu (loginData.appState) {
        setOptions(globalOptions, tùy chọn);
        hãy để Tất cả = (getAll()).filter(i => i.data.messageCount !== không xác định);
            nếu (All.length >= 1) {
                xóaTấtCả(TấtCảBảnĐồ(obj => obj.data.threadID));
            }
        /*
        nếu (global.Fca.Require.FastConfig.Websocket_Extension.Status) {
            const Tên người dùng = Cơ sở dữ liệu().get('Ws_UserName');
            const Mật khẩu = Cơ sở dữ liệu().get("Ws_PassWord");
            nếu (!Tên người dùng || !Mật khẩu || global.Fca.Require.FastConfig.Websocket_Extension.ResetData) {
                const question = câu hỏi => {
                    const rl = readline.createInterface({
                        đầu vào: process.stdin,
                        đầu ra: process.stdout
                    });
                    var xong, trả lời;
                        rl.question(câu hỏi, câu trả lời => {
                            rl. đóng();
                            answ = câu trả lời;
                            xong = đúng
                        })
                        deasync.loopWhile(hàm(){
                            trả về !xong;
                        });
                    trả lời lại;
                };
                console. xóa();
                console.log(figlet.textSync('Horizon', {font: 'ANSI Shadow',horizontalLayout: 'mặc định',verticalLayout: 'mặc định',width: 0,whitespaceBreak: true }));
                console.log(chalk.bold.hex('#9900FF')("[</>]") + chalk.bold.yellow(' => ') + "Hệ điều hành: " + chalk.bold.red(os.type()));
                console.log(chalk.bold.hex('#9900FF')("[</>]") + chalk.bold.yellow(' => ') + "Phiên bản máy: " + chalk.bold.red(os.version()));
                console.log(chalk.bold.hex('#9900FF')("[</>]") + chalk.bold.yellow(' => ') + "Phiên bản Fca: " + chalk.bold.red(global.Fca.Version) + '\n');
                const UserName = câu hỏi(Ngôn ngữ.Ws_TypeUserName);
                const PassWord = câu hỏi(Ngôn ngữ.Ws_TypePassWord);
                nếu (!Tên người dùng || !Mật khẩu) {
                    logger.Warning("Phát hiện hành động nguy hiểm! Tiến hành tự động vô hiệu hóa websocket_extension.");
                    global.Fca.Require.FastConfig.Websocket_Extension.Status = false;
                    global.Fca.Require.fs.writeFileSync(process.cwd() + "/FastConfigFca.json", JSON.stringify(global.Fca.Require.FastConfig, null, "\t"));
                }
                khác {
                    thử {
                        Database().set('Ws_UserName', Tên người dùng);
                        Cơ sở dữ liệu().set('Ws_PassWord', Mật khẩu);
                        logger.Thành công(Ngôn ngữ.Ws_Thành công, hàm() {
                            const speakeasy = yêu cầu('speakeasy');
                            const secret = (speakeasy.generateSecret({ chiều dài: 20 }));
                            logger.Cảnh báo(getText(Ngôn ngữ.Ws_2Fa, secret.base32))
                            Cơ sở dữ liệu().set('Ws_2Fa', secret.base32);
                            nếu (global.Fca.Require.FastConfig.Websocket_Extension.ResetData) {
                                global.Fca.Require.FastConfig.Websocket_Extension.ResetData = false;
                                global.Fca.Require.fs.writeFileSync(process.cwd() + '/FastConfigFca.json', JSON.stringify(global.Fca.Require.FastConfig, null, 4));
                            }
                            question("Nhập để tiếp tục!");
                            const hỏi = hàm() {
                                const TFa_Check = câu hỏi(Language.Ws_2Fa_Check)
                                nếu (TFa_Check != speakeasy.totp({
                                    bí mật: secret.base32,
                                    mã hóa: 'base32'
                                })) {
                                    logger.Warning("Không đúng, vui lòng nhập lại(Mã sai, vui lòng nhập lại.)")
                                    hỏi();
                                }
                                khác {
                                    logger.Success("Thành công!");
                                    tiến trình.thoát(1);
                                }
                            }
                            trả về hỏi();
                        });
                    }
                    bắt (e) {
                        console.log(e)
                        logger.Warning("Lỗi, tự động tắt Websocket_extension");
                        global.Fca.Require.FastConfig.Websocket_Extension.Status = false;
                        global.Fca.Require.fs.writeFileSync(process.cwd() + "/FastConfigFca.json", JSON.stringify(global.Fca.Require.FastConfig, null, "\t"));
                        tiến trình.thoát(1);
                    }
                }
            }
        }
**/
        chuyển đổi (global.Fca.Require.FastConfig.AutoLogin) {
            trường hợp đúng: {
                nếu (global.Fca.Require.FastConfig.ResetDataLogin) trả về setUserNameAndPassWord();
                khác {
                    thử {
                        const TempState = Cơ sở dữ liệu().get("TempState")
                        nếu (TempState) {
                            thử {
                                loginData.appState = JSON.parse(TempState);
                            }
                            nắm lấy (_) {
                                loginData.appState = TempState;
                            }
                            Cơ sở dữ liệu().delete("TempState");
                        }
                    }
                    bắt (e) {
                        console.log(e)
                        Cơ sở dữ liệu().delete("TempState");
                            logger.Cảnh báo(Ngôn ngữ.ErrDataBase);
                            logger. Lỗi();
                        tiến trình.thoát(0);
                    }
                    thử {
                        nếu (Database().has('Tài khoản') && Database().has('Mật khẩu')) trả về loginHelper(loginData.appState, loginData.email, loginData.password, globalOptions, callback, prCallback);
                        nếu không thì trả về setUserNameAndPassWord();
                    }
                    bắt (e) {
                        console.log(e)
                        logger.Cảnh báo(Ngôn ngữ.ErrDataBase);
                            logger. Lỗi();
                        tiến trình.thoát(0);
                    }
                }
            }
            trường hợp sai: {
                trả về loginHelper(loginData.appState, loginData.email, loginData.password, globalOptions, callback, prCallback);
            }
        }
    }
    trả về returnPromise;
}

module.exports = đăng nhập;
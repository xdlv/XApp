Ext.define('XApp.view.License', {
    extend: 'Ext.form.Panel',
    config: {
        fullscreen: true,
        layout: 'vbox',
        scrollable: null,
        items: [{
            docked: 'top',
            height: 20,
            xtype: 'titlebar',
            title: '协议'
        }, {
            xtype: 'fieldset',
            flex: 1,
            name: 'hqContent',
            padding: '10',
            scrollable: {
                direction: 'vertical'
            },
            html: '<h1 align="center"> 移动终端江苏分公司电子对账协议</h1>' + '<p>一、服务对象</p>' + '<p>1、本公司的交易客户及往来的客户；</p>' + '<p>2、签订《移动终端江苏分公司电子对账单服务条款》的客户。</p>' + '<p>二、服务内容</p>' + '<p>在本服务下，本公司将向客户提供最近1个月的电子对账单查阅服务。</p>' + '<p>1、服务的订制与获取</p>' + '<p>（1）甲方订制电子对账单的，乙方将通过微信号向甲方提供微信平台查询对账单，甲方凭捆绑的手机号及登录密码登录微信平台即可查询；</p>' + '<p>（2）甲方订制电子对帐单后，乙方不再向甲方寄送纸质对账单和纸质价保返利确认函；</p>' + '<p>（3）甲方订制电子对帐单的信息，以乙方系统的记录为准；</p>' + '<p>（4）乙方提供的对账单仅供甲方核对及参考使用，甲方账户内所持有账户余额及交易记录，以移动终端江苏分公司最终确认的结果为准。如果甲方对电子对帐单项下的内容有异议，应及时通过电话与本公司业务人员或营业部取得联系。</p>' + '<p>2、服务的变更与取消</p>' + '<p>甲方可通过乙方客户电话途径，变更或取消电子对帐单服务。取消后，乙方将停止向甲方提供电子对帐单。</p>' + '<p>三、双方责任</p>' + '<p>1、甲方责任</p>' + '<p>（1）客户应对维护其账户的保密性和安全性，以及使用其用户名、身份证复印件进行的所有活动和事件承担全部责任。</p>' + '<p>（2）客户应妥善保管手机登陆密码。如发现任何非法使用客户账号、密码或账号密码出现安全漏洞的情况，客户应及时修改相关密码，如因客户未及时修改密码导致的损失，由客户自行负担。</p>' + '<p>（3）客户需对“移动终端江苏分公司电子对账单”提供的客户名、手机号等基本资料进行认真核对，一旦发现有误，及时与本公司联系。</p>' + '<p>（4）客户同意并承诺，不会为因客户使用本服务而招致的任何损失、损害或开支，包括但不限于对客户的资料、通讯设备或其他设备造成的任何损失或损害，要求本公司负责或承担任何责任，除非此等损失、损害或开支乃完全并直接由本公司的严重疏忽或蓄意违责所造成。</p>' + '<p>（5）客户不得将本公司电子对账单服务以任何形式用于任何非法的活动。</p>' + '<p>2、乙方责任</p>' + '<p>（1）甲方成功订制电子对帐单服务后，乙方应根据本协议的约定向甲方提供电子对帐单服务；</p>' + '<p>（2）乙方对甲方的账户资料及电子对帐单项下的信息有保密义务，除根据本协议向甲方提供或按照法律规定进行披露外，未经甲方授权，不得向任何第三方提供甲方电子对帐单项下信息；</p>' + '<p>（3）在乙方提供电子对帐单服务过程中，如因甲方原因或其他非乙方原因，导致第三方知悉甲方电子对帐单项下的内容，乙方对此不承担责任；</p>' + '<p>（4）如因系统或网络原因、以及其他非乙方原因导致电子对帐单显示、发送等出现错误，乙方对此不承担责任。发生此种情况后，甲方应当通过乙方客户服务电话、网站等途径及时与乙方取得联系，乙方将及时采取合理措施进行解决。</p>' + '<p>四、协议的生效、修订和终止</p>' + '<p>1、本协议自甲方申请后即时生效，双方即受本协议约束；</p>' + '<p>2、为了保证本协议项下服务的顺利开展和必要的更新，乙方有权修改本协议。修改后的协议文本自公布之日起生效；</p>' + '<p>3、在以下任一条件成立时，本协议自动终止：</p>' + '<p>（1）甲方与乙方往来账户销户后，本协议自动终止；</p>' + '<p>2、乙方责任</p>' + '<p>（1）甲方成功订制电子对帐单服务后，乙方应根据本协议的约定向甲方提供电子对帐单服务；</p>' + '<p>（2）乙方对甲方的账户资料及电子对帐单项下的信息有保密义务，除根据本协议向甲方提供或按照法律规定进行披露外，未经甲方授权，不得向任何第三方提供甲方电子对帐单项下信息；</p>' + '<p>（3）在乙方提供电子对帐单服务过程中，如因甲方原因或其他非乙方原因，导致第三方知悉甲方电子对帐单项下的内容，乙方对此不承担责任；</p>' + '<p>（4）如因系统或网络原因、以及其他非乙方原因导致电子对帐单显示、发送等出现错误，乙方对此不承担责任。发生此种情况后，甲方应当通过乙方客户服务电话、网站等途径及时与乙方取得联系，乙方将及时采取合理措施进行解决。</p>' + '<p>四、协议的生效、修订和终止</p>' + '<p>1、本协议自甲方申请后即时生效，双方即受本协议约束；</p>' + '<p>2、为了保证本协议项下服务的顺利开展和必要的更新，乙方有权修改本协议。修改后的协议文本自公布之日起生效；</p>' + '<p>3、在以下任一条件成立时，本协议自动终止：</p>' + '<p>（1）甲方与乙方往来账户销户后，本协议自动终止；</p>' + '<p>3、本期账单仅作为对账或记账使用，不作为任何权利凭证。</p>' + '<p>六、其他条款</p>' + '<p>1、本服务的使用须时刻受本条款规限。</p>' + '<p>2、如本条款与其他条款有任何抵触或冲突，就本服务而言，以本条款为准。</p>' + '<p>3、本条款的最终解释权归本公司所有。</p>' + '<p>4、本条款一经客户使用本服务之时，即成立并生效。</p>' + '<p>'
        }, {
            xtype: 'container',
            layout: 'hbox',
            margin: '0 10 10 10',
            items: [{
                xtype: 'button',
                ui: 'confirm',
                text: '同意',
                name: 'confirmLicense',
                disabled: false,
                flex: 1
            }, {
                margin: '0 0 0 10',
                xtype: 'button',
                ui: 'normal',
                text: '不同意',
                name: 'rejectLicense',
                disabled: false,
                flex: 1
            }]
        }]
    }
});
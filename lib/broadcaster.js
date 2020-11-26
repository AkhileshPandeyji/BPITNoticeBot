const puppeteer = require('puppeteer');
const chalk = require('chalk');
const credentials = require('../credentials.json');
const harvestedNotices = require('../harvestedNotices.json');

async function loginFacebook(userid, password) {
    const browser = puppeteer.launch({
        headless: false,
        slowMo: 20,
        defaultViewport: null,
        args: [
            "--start-maximized",
            "--disable-notifications"
        ]
    })
    try {
        console.log( chalk.greenBright.bold("[  INFO  ] ") + "Launching instance of chromium web-browser");
        let page = await (await browser).newPage();
        console.log( chalk.greenBright.bold("\t ==> ") + "Requesting URL: " + chalk.underline("https://www.facebook.com"));
        await page.goto("https://www.facebook.com", { waitUntil: "networkidle0" });
        await page.waitForSelector("#email");
        console.log( chalk.greenBright.bold("\t ==> ") + "Entering UserID: " + chalk.underline(userid));
        await page.type("#email", userid);
        console.log( chalk.greenBright.bold("\t ==> ") + "Entering password: " + chalk.underline("**********"));
        await page.type("#pass", password);
        await page.click("#u_0_b", { waitUntil: "networkidle0" });
        await page.waitFor(2000);

        console.log( chalk.greenBright.bold("\t ==> ") + "Loggedin successfully");
        for (let idx = 0; idx < harvestedNotices.length; idx++) {
            if (harvestedNotices[idx]["notice-file"] != null) {
                console.log( chalk.greenBright.bold("\t ==> ") + "Creating notice post");
                await page.goto("https://www.facebook.com/?ref=tn_tnmn", { waitUntil: "networkidle0" });
                // let postCaption = harvestedNotices[idx]["notice-title"] + "\n\n#bpit #rohini #engineering";
                let postCaption = "Schedule of Internal Viva-Voce for B.Tech VIII Semester, May 2020"

                await page.waitForSelector('div[aria-label="Create"]', { visible:true } );
                // await page.evaluate(function() {
                //     document.querySelector('div[aria-label="Create"]');
                // })

                await page.click('div[aria-label="Create"]',{ waitUntil:"networkidle0" });
                await page.waitForSelector('#mount_0_0 > div > div:nth-child(1) > div.rq0escxv.l9j0dhe7.du4w35lb > div:nth-child(4) > div.ehxjyohh.kr520xx4.poy2od1o.b3onmgus.hv4rvrfc.n7fi1qx3 > div:nth-child(2) > div > div > div.j34wkznp.qp9yad78.pmk7jnqg.kr520xx4 > div.iqfcb0g7.tojvnm2t.a6sixzi8.k5wvi7nf.q3lfd5jv.pk4s997a.bipmatt0.cebpdrjk.qowsmv63.owwhemhu.dp1hu0rb.dhp61c6y.l9j0dhe7.iyyx5f41.a8s20v7p > div > div > div > div > div > div > div > div.ecm0bbzt.rz4wbd8a.sj5x9vvc.a8nywdso > div:nth-child(1) > div > div.ow4ym5g4.auili1gw.rq0escxv.j83agx80.buofh1pr.g5gj957u.i1fnvgqd.oygrvhab.cxmmr5t8.hcukyx3x.kvgmc6g5.nnctdnn4.hpfvmrgz.qt6c0cv9.jb3vyjys.l9j0dhe7.du4w35lb.bp9cbjyn.btwxx1t3.dflh9lhu.scb9dxdr > div.ow4ym5g4.auili1gw.rq0escxv.j83agx80.buofh1pr.g5gj957u.i1fnvgqd.oygrvhab.cxmmr5t8.hcukyx3x.kvgmc6g5.tgvbjcpo.hpfvmrgz.qt6c0cv9.rz4wbd8a.a8nywdso.jb3vyjys.du4w35lb.bp9cbjyn.btwxx1t3.l9j0dhe7',{visible:true});
                await page.click('#mount_0_0 > div > div:nth-child(1) > div.rq0escxv.l9j0dhe7.du4w35lb > div:nth-child(4) > div.ehxjyohh.kr520xx4.poy2od1o.b3onmgus.hv4rvrfc.n7fi1qx3 > div:nth-child(2) > div > div > div.j34wkznp.qp9yad78.pmk7jnqg.kr520xx4 > div.iqfcb0g7.tojvnm2t.a6sixzi8.k5wvi7nf.q3lfd5jv.pk4s997a.bipmatt0.cebpdrjk.qowsmv63.owwhemhu.dp1hu0rb.dhp61c6y.l9j0dhe7.iyyx5f41.a8s20v7p > div > div > div > div > div > div > div > div.ecm0bbzt.rz4wbd8a.sj5x9vvc.a8nywdso > div:nth-child(1) > div > div.ow4ym5g4.auili1gw.rq0escxv.j83agx80.buofh1pr.g5gj957u.i1fnvgqd.oygrvhab.cxmmr5t8.hcukyx3x.kvgmc6g5.nnctdnn4.hpfvmrgz.qt6c0cv9.jb3vyjys.l9j0dhe7.du4w35lb.bp9cbjyn.btwxx1t3.dflh9lhu.scb9dxdr > div.ow4ym5g4.auili1gw.rq0escxv.j83agx80.buofh1pr.g5gj957u.i1fnvgqd.oygrvhab.cxmmr5t8.hcukyx3x.kvgmc6g5.tgvbjcpo.hpfvmrgz.qt6c0cv9.rz4wbd8a.a8nywdso.jb3vyjys.du4w35lb.bp9cbjyn.btwxx1t3.l9j0dhe7',{waitUntil:"networkidle0" });
                await page.waitForSelector('body > div.l9j0dhe7.tkr6xdv7 > div.rq0escxv.l9j0dhe7.du4w35lb > div > div.iqfcb0g7.tojvnm2t.a6sixzi8.k5wvi7nf.q3lfd5jv.pk4s997a.bipmatt0.cebpdrjk.qowsmv63.owwhemhu.dp1hu0rb.dhp61c6y.l9j0dhe7.iyyx5f41.a8s20v7p > div > div > div > form > div > div.kr520xx4.pedkr2u6.ms05siws.pnx7fd3z.b7h9ocf4.pmk7jnqg.j9ispegn > div > div > div.q5bimw55.rpm2j7zs.k7i0oixp.gvuykj2m.j83agx80.cbu4d94t.ni8dbmo4.eg9m0zos.l9j0dhe7.du4w35lb.ofs802cu.pohlnb88.dkue75c7.mb9wzai9.l56l04vs.r57mb794.kh7kg01d.c3g1iek1.buofh1pr > div.j83agx80.cbu4d94t.buofh1pr.l9j0dhe7 > div.o6r2urh6.buofh1pr.datstx6m.l9j0dhe7.oh7imozk > div.rq0escxv.buofh1pr.df2bnetk.hv4rvrfc.dati1w0a.l9j0dhe7.k4urcfbm.du4w35lb.gbhij3x4 > div > div > div > div > div._5rpb > div > div > div > div > span',{visible:true});
                await page.type('body > div.l9j0dhe7.tkr6xdv7 > div.rq0escxv.l9j0dhe7.du4w35lb > div > div.iqfcb0g7.tojvnm2t.a6sixzi8.k5wvi7nf.q3lfd5jv.pk4s997a.bipmatt0.cebpdrjk.qowsmv63.owwhemhu.dp1hu0rb.dhp61c6y.l9j0dhe7.iyyx5f41.a8s20v7p > div > div > div > form > div > div.kr520xx4.pedkr2u6.ms05siws.pnx7fd3z.b7h9ocf4.pmk7jnqg.j9ispegn > div > div > div.q5bimw55.rpm2j7zs.k7i0oixp.gvuykj2m.j83agx80.cbu4d94t.ni8dbmo4.eg9m0zos.l9j0dhe7.du4w35lb.ofs802cu.pohlnb88.dkue75c7.mb9wzai9.l56l04vs.r57mb794.kh7kg01d.c3g1iek1.buofh1pr > div.j83agx80.cbu4d94t.buofh1pr.l9j0dhe7 > div.o6r2urh6.buofh1pr.datstx6m.l9j0dhe7.oh7imozk > div.rq0escxv.buofh1pr.df2bnetk.hv4rvrfc.dati1w0a.l9j0dhe7.k4urcfbm.du4w35lb.gbhij3x4 > div > div > div > div > div._5rpb > div > div > div > div > span', postCaption);
                let uploadPhotoHandle = await page.$('body > div.l9j0dhe7.tkr6xdv7 > div.rq0escxv.l9j0dhe7.du4w35lb > div > div.iqfcb0g7.tojvnm2t.a6sixzi8.k5wvi7nf.q3lfd5jv.pk4s997a.bipmatt0.cebpdrjk.qowsmv63.owwhemhu.dp1hu0rb.dhp61c6y.l9j0dhe7.iyyx5f41.a8s20v7p > div > div > div > form > div > div.kr520xx4.pedkr2u6.ms05siws.pnx7fd3z.b7h9ocf4.pmk7jnqg.j9ispegn > div > div > div.ihqw7lf3.discj3wi.l9j0dhe7 > div.scb9dxdr.sj5x9vvc.dflh9lhu.cxgpxx05.dhix69tm.wkznzc2l.i1fnvgqd.j83agx80.rq0escxv.ibutc8p7.l82x9zwi.uo3d90p7.pw54ja7n.ue3kfks5.tr4kgdav.eip75gnj.ccnbzhu1.dwg5866k.cwj9ozl2.bp9cbjyn > div:nth-child(2) > div > div:nth-child(1) > input');
                await uploadPhotoHandle.uploadFile('./lib/pic.png');
                await page.waitFor(3000);
                await page.click('body > div.l9j0dhe7.tkr6xdv7 > div.rq0escxv.l9j0dhe7.du4w35lb > div > div.iqfcb0g7.tojvnm2t.a6sixzi8.k5wvi7nf.q3lfd5jv.pk4s997a.bipmatt0.cebpdrjk.qowsmv63.owwhemhu.dp1hu0rb.dhp61c6y.l9j0dhe7.iyyx5f41.a8s20v7p > div > div > div > form > div > div.kr520xx4.pedkr2u6.ms05siws.pnx7fd3z.b7h9ocf4.pmk7jnqg.j9ispegn > div > div > div.ihqw7lf3.discj3wi.l9j0dhe7 > div.k4urcfbm.dati1w0a.hv4rvrfc.i1fnvgqd.j83agx80.rq0escxv.bp9cbjyn.discj3wi > div', { waitUntil:"networkidle0" });
                await page.waitFor(5000);
                break;
            }
        }
        console.log( chalk.greenBright.bold("[  INFO  ] ") + "Closing instance of chromium web browser");
        await (await browser).close();
    }
    catch(error) {
        console.log(error);
    }
    
}

module.exports.postOnFacebook = loginFacebook;
// loginFacebook(credentials["facebook-id"], process.env.NOTICE_BOT_FB_PASSWORD || credentials["facebook-password"]);
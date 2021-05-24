export const javaCode = `package com.lzh.jmeter.ui.cases;
import com.lzh.jmeter.ui.domain.CaseInfo;
import com.lzh.jmeter.ui.listener.UIListener;
import org.testng.Assert;
import org.testng.TestNG;
import org.testng.annotations.Test;

public class LoginTest extends BaseTest {

    @Test(testName = "login")
    public void login () {
        driver.manage().window().maximize();
        driver.get("https://doctor.jd.com");
    }

    @Test(testName = "test1")
    public void test1() throws InterruptedException {
        Thread.sleep(10000);
        Assert.assertTrue("aa".equals("bb"), "aa"+"与"+"bb不相等");
        System.out.println("失败结束");
    }

    public static void main(String[] args) {
        TestNG tng = new TestNG();
        tng.setVerbose(0);
        tng.addListener(new UIListener());
        tng.setTestClasses(new Class[] {LoginTest.class});
        tng.run();
    }

    @Override
    public void setCaseInfo(CaseInfo caseInfo) {
        caseInfo.setName("登录");
        caseInfo.setDesc("工作台登录操作");
        this.caseInfo = caseInfo;
    }
}
`;

export const jsonData = {"username": "15910401369", "password": "123456"};
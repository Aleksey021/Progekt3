package sample;

import javafx.application.Application;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.geometry.Insets;
import javafx.scene.Group;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.layout.HBox;
import javafx.scene.layout.Region;
import javafx.scene.layout.VBox;
import javafx.scene.web.WebEngine;
import javafx.scene.web.WebView;
import javafx.stage.Stage;

import java.io.File;
import java.net.MalformedURLException;
import java.net.URL;

import static javafx.application.Application.launch;

public class Test extends Application {

    private Scene scene;
    MyBrowser myBrowser;

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        launch(args);
    }

    @Override
    public void start(Stage primaryStage) throws MalformedURLException {
        primaryStage.setTitle("Railway Scenario Development");

        myBrowser = new MyBrowser();
        scene = new Scene(myBrowser, 600, 400);

        primaryStage.setScene(scene);
        primaryStage.show();
    }

    class MyBrowser extends Region {

        HBox toolbar;

        WebView webView = new WebView();
        WebEngine webEngine = webView.getEngine();

        public MyBrowser() throws MalformedURLException {
            File file = new File("src\\game\\index.html");
            URL url = file.toURI().toURL();
            webEngine.load(url.toString());

            getChildren().add(webView);

        }

    }



   /* public void start(final Stage stage) throws MalformedURLException {

        final WebView browser = new WebView();
        final WebEngine webEngine = browser.getEngine();

        File file = new File("src\\game\\index.html");
        URL url = file.toURI().toURL();
        webEngine.load(url.toString());

        VBox root = new VBox();
        root.setPadding(new Insets(5));
        root.setSpacing(5);
        root.getChildren().addAll(browser);

        Scene scene = new Scene(root);

        stage.setTitle("JavaFX WebView ");
        stage.setScene(scene);
        stage.setWidth(600);
        stage.setHeight(600);
        stage.show();
    }*/
}
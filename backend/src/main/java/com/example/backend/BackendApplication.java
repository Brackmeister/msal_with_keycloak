package com.example.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.SSLContext;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;
import java.security.KeyManagementException;
import java.security.NoSuchAlgorithmException;
import java.security.cert.X509Certificate;

@SpringBootApplication
public class BackendApplication {

    public static void main(String[] args) throws NoSuchAlgorithmException, KeyManagementException {

        // for easy working with self-signed certificates
        TrustManager trm = new X509TrustManager() {
            public X509Certificate[] getAcceptedIssuers() {
                return null;
            }

            public void checkClientTrusted(X509Certificate[] certs, String authType) {

            }

            public void checkServerTrusted(X509Certificate[] certs, String authType) {
            }
        };

        SSLContext sc = SSLContext.getInstance("SSL");
        sc.init(null, new TrustManager[] { trm }, null);
        HttpsURLConnection.setDefaultSSLSocketFactory(sc.getSocketFactory());

        SpringApplication.run(BackendApplication.class, args);
    }

}

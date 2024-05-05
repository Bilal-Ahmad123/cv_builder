// PDFViewer.js
import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import { resumeData } from "../utils/types";

const PDFViewerComponent: React.FC<resumeData> = (props) => {
  const { personalData, education, extras, experience, projects } = props.data;

  return (
    <Document>
      <Page style={styles.page}>
        <Text style={styles.detailLabel}>Personal Details</Text>
        <View style={styles.detail}>
          {personalData &&
            Object.entries(personalData)?.map(([key, value], index) => (
              <View key={index}>
                {value?.length > 0 && (
                  <Text style={styles.innerText}>
                    {key}:{value}
                  </Text>
                )}
              </View>
            ))}
        </View>

        <View style={styles.detail}>
          <Text style={{ fontWeight: "bold", fontSize: 15, marginBottom: 8 }}>
            Education Details
          </Text>
          {education.map((value, index) => (
            <View key={index} style={styles.detail}>
              {Object.entries(value).map(([key, val], index) => {
                return (
                  <Text style={styles.innerText} key={index}>
                    {key}: {val}
                  </Text>
                );
              })}
            </View>
          ))}
        </View>
        {projects.length > 0 && (
          <View style={styles.detail}>
            <Text style={styles.detailLabel}>Project Details</Text>
            {projects.map((value, index) => (
              <View key={index} style={styles.detail}>
                {Object.entries(value).map(([key, val], index) => {
                  return (
                    <View key={index}>
                      {val.length > 0 && (
                        <Text style={styles.innerText} key={index}>
                          {key}: {val}
                        </Text>
                      )}
                    </View>
                  );
                })}
              </View>
            ))}
          </View>
        )}
        {experience.length > 0 && (
          <View style={styles.detail}>
            <Text style={styles.detailLabel}>Experience Details</Text>
            {experience.map((value, index) => (
              <View key={index} style={styles.detail}>
                {Object.entries(value).map(([key, val], index) => {
                  return (
                    <View>
                      {val.length > 0 && (
                        <Text style={styles.innerText} key={index}>
                          {key}: {val}
                        </Text>
                      )}
                    </View>
                  );
                })}
              </View>
            ))}
          </View>
        )}

        {extras && (
          <View>
            {Object.entries(extras)?.map(([key, value], index) => (
              <View key={index} style={styles.detail}>
                {value.length > 0 && (
                  <View>
                    <Text style={styles.detailLabel}>{key}</Text>
                    <View style={{ flexDirection: "row" }}>
                      {value.map((item, index) => {
                        return (
                          <View key={index}>
                            {item.length > 0 && (
                              <Text
                                style={{
                                  fontSize: 10,
                                  fontWeight: "bold",
                                  marginBottom: 5,
                                  color: "#333",
                                  flexDirection: "row",
                                }}
                                key={index}
                              >
                                {item},
                              </Text>
                            )}
                          </View>
                        );
                      })}
                    </View>
                  </View>
                )}
              </View>
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
};

const styles = StyleSheet.create({
  viewer: {
    width: "100%",
    height: "100vh",
  },
  page: {
    padding: 40,
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  detail: {
    marginBottom: 10,
  },
  detailLabel: {
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 8,
  },
  innerText: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
});

export default PDFViewerComponent;

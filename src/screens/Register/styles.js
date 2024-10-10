import { theme } from "../../constants/theme";

export const styles = {
  container: {
    flex: 1,
    padding: 40,
    alignItems: "center",
    justifyContent: "center",

  },
  formContainer: {
    width: "100%",
    marginTop: 70,
    marginBottom: 40
  },
  form: {
    width: '100%',
    marginBottom: 25,

  },
  footer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    marginBottom: 0,

  },
  footerText: {
    textAlign: 'center',
    color: theme.colors.darkGray,
    fontSize: theme.FONT_SIZE.md,

  }
}
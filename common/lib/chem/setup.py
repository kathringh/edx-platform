from setuptools import setup

setup(
    name="chem",
    version="0.1",
    packages=["chem"],
    install_requires=[
        "pyparsing",
        "numpy",
        "scipy",
        "nltk==2.0.4",
    ],
)

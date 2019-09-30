import csv

import numpy as np
import matplotlib.pyplot as plt
from sklearn import svm
from sklearn.svm import SVC
from sklearn.metrics import accuracy_score

def readData(emotion_file):
    print("Verificando combinações já processadas ...")
    emotions = []
    labes = []
    with open(emotion_file) as csvfile:
        readCSV = csv.reader(csvfile, delimiter=' ')
        for row in readCSV:
            emotion = []
            emotion.append(float(row[0]))
            emotion.append(float(row[1]))
            labes.append(int(row[2]))
            emotions.append(emotion)
    emotions = np.array(emotions)
    labes = np.array(labes)
    
    return emotions, labes

data_emotion, labes = readData('input/emotions.csv')
# print(data_emotion)

def make_meshgrid(x, y, h=.02):
    """Create a mesh of points to plot in

    Parameters
    ----------
    x: data to base x-axis meshgrid on
    y: data to base y-axis meshgrid on
    h: stepsize for meshgrid, optional

    Returns
    -------
    xx, yy : ndarray
    """
    x_min, x_max = x.min() - 1, x.max() + 1
    y_min, y_max = y.min() - 1, y.max() + 1
    xx, yy = np.meshgrid(np.arange(x_min, x_max, h),
                         np.arange(y_min, y_max, h))
    return xx, yy


def plot_contours(ax, clf, xx, yy, **params):
    """Plot the decision boundaries for a classifier.

    Parameters
    ----------
    ax: matplotlib axes object
    clf: a classifier
    xx: meshgrid ndarray
    yy: meshgrid ndarray
    params: dictionary of params to pass to contourf, optional
    """
    Z = clf.predict(np.c_[xx.ravel(), yy.ravel()])
    Z = Z.reshape(xx.shape)
    cont = 0
    out = ax.contourf(xx, yy, Z, **params)
    # acc = accuracy_score(y, xx.shape, 141)
    acc = SVC.score(clf, X, y, sample_weight=None)

    # for y_t, z_t in zip(yy, Z):
    #     if y_t != z_t:
    #         cont = cont + 1

    print(">>>>>>>>>> 1")
    print((acc))
    print(">>>>>>>>>> 2")
    # print((yy))
    # res = (1-(cont/len(y)) )  * 100
    # print(res)
   
    
    
    return out

# Take the first two features. We could avoid this by using a two-dim dataset
X = data_emotion
y = labes

# we create an instance of SVM and fit out data. We do not scale our
# data since we want to plot the support vectors
C = 1.0  # SVM regularization parameter
models = (svm.SVC(kernel='linear', C=C),
          svm.LinearSVC(C=C, max_iter=10000),
          svm.SVC(kernel='rbf', gamma=0.7, C=C),
          svm.SVC(kernel='poly', degree=3, gamma='auto', C=C))
models = (clf.fit(X, y) for clf in models)

# title for the plots
titles = ('SVC with linear kernel',
          'LinearSVC (linear kernel)',
          'SVC with RBF kernel',
          'SVC with polynomial (degree 3) kernel')

# Set-up 2x2 grid for plotting.
fig, sub = plt.subplots(2, 2)
plt.subplots_adjust(wspace=0.4, hspace=0.4)

X0, X1 = X[:, 0], X[:, 1]
xx, yy = make_meshgrid(X0, X1)

for clf, title, ax in zip(models, titles, sub.flatten()):
    plot_contours(ax, clf, xx, yy,
                  cmap=plt.cm.coolwarm, alpha=0.8)
    ax.scatter(X0, X1, c=y, cmap=plt.cm.coolwarm, s=20, edgecolors='k')
    ax.set_xlim(xx.min(), xx.max())
    ax.set_ylim(yy.min(), yy.max())
    ax.set_xlabel('Pitch')
    ax.set_ylabel('TCZ')
    ax.set_xticks(())
    ax.set_yticks(())
    ax.set_title(title)

plt.show()